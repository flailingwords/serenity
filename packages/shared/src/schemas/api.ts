import { z } from 'zod'

import { zUnsplashCollectionPhoto } from './unsplash'

export const zAPIUnsplashResponseData = z.object({
    ts: z.number(),
    photo: zUnsplashCollectionPhoto,
    instanceId: z.string()
})

export type APIUnsplashResponseData = z.infer<typeof zAPIUnsplashResponseData>

export const isAPIUnsplashResponseData = (inp?: unknown): inp is APIUnsplashResponseData => zAPIUnsplashResponseData.safeParse(inp).success
