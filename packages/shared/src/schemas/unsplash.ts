/* eslint-disable @typescript-eslint/naming-convention -- external data */
import { z } from 'zod'

export const zUnsplashEntity = z.object({
    id: z.string()
})

export const zUnsplashPhotoStatValue = z.object({
    value: z.number(),
    date: z.string()
})

export const zUnsplashPhotoStat = z.object({
    total: z.number(),
    historical: z.object({
        change: z.number(),
        quantity: z.number(),
        resolution: z.string(),
        values: z.array(zUnsplashPhotoStatValue)
    })
})

export const zUnsplashPhotoStats = zUnsplashEntity.extend({
    views: zUnsplashPhotoStat,
    downloads: zUnsplashPhotoStat
})

export const zUnsplashPhotoVeryBasic = zUnsplashEntity.extend({
    created_at: z.string(),
    updated_at: z.string(),
    urls: z.object({
        full: z.string(),
        raw: z.string(),
        regular: z.string(),
        small: z.string(),
        thumb: z.string()
    })
})

export const zUnsplashUserBasic = zUnsplashEntity.extend({
    bio: z.string().nullish(),
    first_name: z.string(),
    instagram_username: z.string().nullish(),
    last_name: z.string().nullish(),
    links: z.object({
        followers: z.string().nullish(),
        following: z.string().nullish(),
        html: z.string(),
        likes: z.string(),
        photos: z.string(),
        portfolio: z.string(),
        self: z.string()
    }),
    location: z.string().nullish(),
    name: z.string(),
    portfolio_url: z.string().nullish(),
    profile_image: z.object({
        small: z.string(),
        medium: z.string(),
        large: z.string()
    }),
    total_collections: z.number(),
    total_likes: z.number(),
    total_photos: z.number(),
    twitter_username: z.string().nullish(),
    updated_at: z.string(),
    username: z.string()
})

export const zUnsplashUserMedium = zUnsplashUserBasic.extend({
    photos: z.array(zUnsplashPhotoVeryBasic)
})

export const zUnsplashUserFull = zUnsplashUserMedium.extend({
    downloads: z.number(),
    followers_count: z.number(),
    following_count: z.number()
})

export const zUnsplashPhotoBasic = zUnsplashPhotoVeryBasic.extend({
    alt_description: z.string().nullish(),
    blur_hash: z.string().nullish(),
    color: z.string().nullish(),
    description: z.string().nullish(),
    height: z.number(),
    likes: z.number(),
    links: z.object({
        self: z.string(),
        html: z.string(),
        download: z.string(),
        download_location: z.string()
    }),
    promoted_at: z.string().nullish(),
    width: z.number(),
    user: zUnsplashUserBasic
})

export const zUnsplashPhotoExifAndLocation = z.object({
    exif: z.object({
        make: z.string().nullish(),
        model: z.string().nullish(),
        exposure_time: z.string().nullish(),
        aperture: z.string().nullish(),
        focal_length: z.string().nullish(),
        iso: z.number().nullish()
    }),
    location: z.object({
        city: z.string().nullish(),
        country: z.string().nullish(),
        /** full string representation of the location, including `city` and `country` if they exist. */
        name: z.string().nullish(),
        position: z.object({
            latitude: z.number().nullish(),
            longitude: z.number().nullish()
        })
    })
})

export const zUnsplashPhotoRandom = z.object({
    ...zUnsplashPhotoBasic.shape,
    ...zUnsplashPhotoExifAndLocation.shape
})

export const zUnsplashCollectionUser = z.object({})

export const zUnsplashCollectionVeryBasic = zUnsplashEntity.extend({
    title: z.string(),
    published_at: z.string(),
    last_collected_at: z.string(),
    updated_at: z.string(),
    cover_photo: zUnsplashPhotoBasic.nullish(),
    user: zUnsplashUserBasic.nullish()
})

export const zUnsplashCollectionBasic = zUnsplashCollectionVeryBasic.extend({
    description: z.string().nullish(),
    featured: z.boolean(),
    /**
     * This is different from `updated_at` because that may also change when a photo inside changes or
     * is deleted.
     */
    links: z.object({
        self: z.string(),
        html: z.string(),
        photos: z.string(),
        download: z.string().optional(),
        related: z.string().optional()
    }),
    preview_photos: z.array(zUnsplashPhotoVeryBasic).nullish(),
    total_photos: z.number()
})

export const zUnsplashCollectionPhoto = zUnsplashPhotoBasic.extend({
    current_user_collections: z.array(zUnsplashCollectionVeryBasic)
})

export const zUnsplashCollectionPhotos = z.array(zUnsplashCollectionPhoto)

export const zUnsplashCollectionPhotosResult = z.object({
    results: z.array(zUnsplashCollectionPhoto),
    total: z.number()
})

export const zUnsplashPhotoRelatedCollectionsType = z.union([z.literal('related'), z.literal('collected')])

export const zUnsplashPhotoFull = zUnsplashPhotoBasic.extend(zUnsplashPhotoExifAndLocation.shape).extend({
    related_collections: z.object({
        type: zUnsplashPhotoRelatedCollectionsType,
        results: z.array(zUnsplashCollectionBasic),
        total: z.number()
    })
})

export type UnsplashEntity = z.infer<typeof zUnsplashEntity>
export type UnsplashPhotoStatValue = z.infer<typeof zUnsplashPhotoStatValue>
export type UnsplashPhotoStat = z.infer<typeof zUnsplashPhotoStat>
export type UnsplashPhotoStats = z.infer<typeof zUnsplashPhotoStats>
export type UnsplashPhotoVeryBasic = z.infer<typeof zUnsplashPhotoVeryBasic>
export type UnsplashUserBasic = z.infer<typeof zUnsplashUserBasic>
export type UnsplashUserMedium = z.infer<typeof zUnsplashUserMedium>
export type UnsplashUserFull = z.infer<typeof zUnsplashUserFull>
export type UnsplashPhotoBasic = z.infer<typeof zUnsplashPhotoBasic>
export type UnsplashPhotoExifAndLocation = z.infer<typeof zUnsplashPhotoExifAndLocation>
export type UnsplashPhotoRandom = z.infer<typeof zUnsplashPhotoRandom>
export type UnsplashCollectionVeryBasic = z.infer<typeof zUnsplashCollectionVeryBasic>
export type UnsplashCollectionBasic = z.infer<typeof zUnsplashCollectionBasic>
export type UnsplashCollectionPhoto = z.infer<typeof zUnsplashCollectionPhoto>
export type UnsplashCollectionPhotos = z.infer<typeof zUnsplashCollectionPhotos>
export type UnsplashCollectionPhotosResult = z.infer<typeof zUnsplashCollectionPhotosResult>
export type UnsplashPhotoRelatedCollectionsType = z.infer<typeof zUnsplashPhotoRelatedCollectionsType>
export type UnsplashPhotoFull = z.infer<typeof zUnsplashPhotoFull>

export const isUnsplashEntity = (inp?: unknown): inp is UnsplashEntity => zUnsplashEntity.safeParse(inp).success
export const isUnsplashPhotoStatValue = (inp?: unknown): inp is UnsplashPhotoStatValue => zUnsplashPhotoStatValue.safeParse(inp).success
export const isUnsplashPhotoStat = (inp?: unknown): inp is UnsplashPhotoStat => zUnsplashPhotoStat.safeParse(inp).success
export const isUnsplashPhotoStats = (inp?: unknown): inp is UnsplashPhotoStats => zUnsplashPhotoStats.safeParse(inp).success
export const isUnsplashPhotoVeryBasic = (inp?: unknown): inp is UnsplashPhotoVeryBasic => zUnsplashPhotoVeryBasic.safeParse(inp).success
export const isUnsplashUserBasic = (inp?: unknown): inp is UnsplashUserBasic => zUnsplashUserBasic.safeParse(inp).success
export const isUnsplashUserMedium = (inp?: unknown): inp is UnsplashUserMedium => zUnsplashUserMedium.safeParse(inp).success
export const isUnsplashUserFull = (inp?: unknown): inp is UnsplashUserFull => zUnsplashUserFull.safeParse(inp).success
export const isUnsplashPhotoBasic = (inp?: unknown): inp is UnsplashPhotoBasic => zUnsplashPhotoBasic.safeParse(inp).success
export const isUnsplashPhotoExifAndLocation = (inp?: unknown): inp is UnsplashPhotoExifAndLocation => zUnsplashPhotoExifAndLocation.safeParse(inp).success
export const isUnsplashPhotoRandom = (inp?: unknown): inp is UnsplashPhotoRandom => zUnsplashPhotoRandom.safeParse(inp).success
export const isUnsplashCollectionVeryBasic = (inp?: unknown): inp is UnsplashCollectionVeryBasic => zUnsplashCollectionVeryBasic.safeParse(inp).success
export const isUnsplashCollectionBasic = (inp?: unknown): inp is UnsplashCollectionBasic => zUnsplashCollectionBasic.safeParse(inp).success
export const isUnsplashCollectionPhoto = (inp?: unknown): inp is UnsplashCollectionPhoto => zUnsplashCollectionPhoto.safeParse(inp).success
export const isUnsplashCollectionPhotos = (inp?: unknown): inp is UnsplashCollectionPhotos => zUnsplashCollectionPhotos.safeParse(inp).success
export const isUnsplashCollectionPhotosResult = (inp?: unknown): inp is UnsplashCollectionPhotosResult => zUnsplashCollectionPhotosResult.safeParse(inp).success
export const isUnsplashPhotoRelatedCollectionsType = (inp?: unknown): inp is UnsplashPhotoRelatedCollectionsType =>
    zUnsplashPhotoRelatedCollectionsType.safeParse(inp).success
export const isUnsplashPhotoFull = (inp?: unknown): inp is UnsplashPhotoFull => zUnsplashPhotoFull.safeParse(inp).success
