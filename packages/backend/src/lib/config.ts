import path from 'node:path'

import dotenvFlow from 'dotenv-flow'
import { type BackendConfig, normalizeTime } from 'serenity-shared'

dotenvFlow.config()

export const backendConfig: BackendConfig = {
    wwwpath: process.env.WWWPATH ?? path.resolve(path.join(process.cwd(), 'www')),
    unsplash: {
        accessKey: process.env.UNSPLASH_ACCESS_KEY ?? '',
        secretKey: process.env.UNSPLASH_SECRET_KEY ?? '',
        cacheTime: normalizeTime(process.env.UNSPLASH_CACHE_TIME != null ? parseInt(process.env.UNSPLASH_CACHE_TIME) : 3600),
        collectionId: process.env.UNSPLASH_COLLECTION_IDS ?? ''
    },
    weatherApi: {
        key: process.env.WEATHER_API_KEY ?? '',
        cache: {
            time: normalizeTime(process.env.WEATHER_CACHE_TIME != null ? parseInt(process.env.WEATHER_CACHE_TIME) : 3600),
            interval: normalizeTime(process.env.WEATHER_CACHE_INTERVAL != null ? parseInt(process.env.WEATHER_CACHE_INTERVAL) : 60000)
        }
    }
}

export default backendConfig
