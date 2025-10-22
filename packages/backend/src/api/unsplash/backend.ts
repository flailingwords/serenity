import { setInterval } from 'node:timers'


import {
    getDebugger,
    getRandomId,
    isUnsplashCollectionPhotosResult,
    normalizeTime,
    zUnsplashCollectionPhotosResult,
    BackendService,
    type UnsplashCollectionPhoto,
    type UnsplashCollectionPhotos
} from 'serenity-shared'
import { createApi } from 'unsplash-js'

import type { Debugger } from 'debug'

import { backendConfig } from '@/lib/config.js'

const pageSize = 30

class UnsplashBackendServiceImpl extends BackendService {
    unsplash: ReturnType<typeof createApi>
    photoExpiryTime: number
    collectionCacheExpiryTime: number
    collectionCache: UnsplashCollectionPhotos = []
    intervalId: NodeJS.Timeout | undefined
    started = false
    instanceId: string = getRandomId()
    debug: Debugger = getDebugger('unsplash-backend').extend(this.instanceId)
    collectionCount: number

    constructor() {
        super()

        this.debug('Creating backend service')

        this.unsplash = createApi({
            accessKey: backendConfig.unsplash.accessKey
        })

        this.photoExpiryTime = 0
        this.collectionCacheExpiryTime = 0
        this.collectionCount = 0
    }

    async getRandomPhoto(): Promise<UnsplashCollectionPhoto> {
        this.debug('Getting random photo')

        await this.refreshPhotoCollectionCache()

        return this.collectionCache[Math.floor(Math.random() * (this.collectionCache.length - 1))]
    }

    async refreshPhotoCollectionCache(): Promise<void> {
        this.debug('Refreshing photo collection cache')

        if (this.collectionCache.length === 0 || (this.collectionCache.length !== this.collectionCount && Date.now() > this.collectionCacheExpiryTime)) {
            const nextCollectionRequestPage = Math.floor(this.collectionCache.length / pageSize + 1)
            this.debug('Getting new photo:', nextCollectionRequestPage)

            const collectionResult = await this.unsplash.collections.getPhotos({
                collectionId: backendConfig.unsplash.collectionId,
                orientation: 'landscape',
                page: nextCollectionRequestPage,
                perPage: pageSize
            })

            if (collectionResult.type === 'error' || !isUnsplashCollectionPhotosResult(collectionResult.response)) {
                this.debug('Failed to get photo:')
                console.error(JSON.stringify(collectionResult))
                console.error(zUnsplashCollectionPhotosResult.safeParse(collectionResult.response))

                throw new Error('Unable to get photo from Unsplash')
            }

            this.collectionCache = [
                ...this.collectionCache,
                ...(collectionResult.response.results as UnsplashCollectionPhotos)
            ].reduce<UnsplashCollectionPhotos>((c, p) => {
                if (c.find((e) => e.id === p.id) == null) c.push(p)
                return c
            }, [])
            // eslint-disable-next-line @typescript-eslint/prefer-destructuring -- lazy
            this.collectionCount = collectionResult.response.total
            this.collectionCacheExpiryTime = Date.now() + normalizeTime(backendConfig.unsplash.cacheTime)
        }
    }

    start(): void {
        this.debug('Starting backend service')

        if (this.started) return
        this.intervalId = setInterval(
            () => {
                void this.refreshPhotoCollectionCache()
            },
            (60 / 50) * 60 * 1000
        )
        this.started = true
    }

    stop(): void {
        this.debug('Stopping backend service')

        if (typeof this.intervalId !== 'undefined') {
            clearInterval(this.intervalId)
            this.intervalId = undefined
        }

        this.started = false
    }
}

const getInstance = (): UnsplashBackendServiceImpl => {
    let unsplashBackendServiceInstance = GlobalInstanceManagerInstance.getInstance<UnsplashBackendServiceImpl>('UnsplashBackendService')

    if (unsplashBackendServiceInstance == null) {
        unsplashBackendServiceInstance = new UnsplashBackendServiceImpl()

        GlobalInstanceManagerInstance.saveInstance('UnsplashBackendService', unsplashBackendServiceInstance)
    }

    unsplashBackendServiceInstance.start()

    return unsplashBackendServiceInstance
}

export default getInstance()
