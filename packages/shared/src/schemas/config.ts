import { z } from 'zod'

export const zBackendConfigUnsplash = z.object({
    accessKey: z.string(),
    secretKey: z.string(),
    cacheTime: z.number(),
    collectionId: z.string()
})

export const zBackendConfigWeatherAPI = z.object({
    key: z.string(),
    cache: z.object({
        time: z.number(),
        interval: z.number()
    })
})

export const zBackendConfig = z.object({
    wwwpath: z.string().refine((path) => /\.?(\/\w([.-_]\w+)*)+/.test(path)),
    unsplash: zBackendConfigUnsplash,
    weatherApi: zBackendConfigWeatherAPI
})

export type BackendConfigUnsplash = z.infer<typeof zBackendConfigUnsplash>
export type BackendConfigWeatherAPI = z.infer<typeof zBackendConfigWeatherAPI>
export type BackendConfig = z.infer<typeof zBackendConfig>

export const zFrontendConfig = z.object({
    backgroundUpdateInterval: z.number(),
    quoteUpdateInterval: z.number()
})

export type FrontendConfig = z.infer<typeof zFrontendConfig>

export const isBackendConfigUnsplash = (inp?: unknown): inp is BackendConfigUnsplash => zBackendConfigUnsplash.safeParse(inp).success
export const isBackendConfigWeatherAPI = (inp?: unknown): inp is BackendConfigWeatherAPI => zBackendConfigWeatherAPI.safeParse(inp).success
export const isBackendConfig = (inp?: unknown): inp is BackendConfig => zBackendConfig.safeParse(inp).success
export const isFrontendConfig = (inp?: unknown): inp is FrontendConfig => zFrontendConfig.safeParse(inp).success
