import { useEffect, useState } from 'react'

import { fetcher, type UnsplashCollectionPhoto, type APIUnsplashResponseData } from 'serenity-shared'
import { PhotoTemplate } from 'serenity-shared'
import useSWR from 'swr'

import { useBackgroundUpdateInterval } from './useBackgroundUpdateInterval'

export const useUnsplash = (): UnsplashCollectionPhoto => {
    const backgroundUpdateInterval = useBackgroundUpdateInterval()
    const [photo, setPhoto] = useState<UnsplashCollectionPhoto>(PhotoTemplate)

    const {
        data: apiData,
        isLoading: isApiLoading,
        isValidating: isApiValidating
        // @ts-expect-error mismatch
    } = useSWR<APIUnsplashResponseData>('/api/unsplash', fetcher, { refreshInterval: backgroundUpdateInterval })

    console.debug(`backgroundUpdateInterval: ${backgroundUpdateInterval}`)
    console.debug(`isApiValidating: ${isApiValidating}`)

    useEffect(() => {
        if (!isApiLoading && !isApiValidating && apiData != null && apiData.photo !== photo) {
            setPhoto(apiData.photo)
        }
    }, [apiData, isApiLoading, isApiValidating])

    return photo
}
