/* eslint-disable @typescript-eslint/naming-convention -- external data format */
import { z } from 'zod'

export const zUnsplashUrl = z.object({
    raw: z.string(),
    full: z.string(),
    regular: z.string(),
    small: z.string(),
    thumb: z.string(),
    small_s3: z.string()
})

export const zUnsplashLink = z.object({
    self: z.string(),
    html: z.string(),
    download: z.string(),
    download_location: z.string()
})

export const zUnsplashTopicSubmissions = z.record(z.string(), z.unknown())

export const zUnsplashUserLink = z.object({
    self: z.string(),
    html: z.string(),
    photos: z.string(),
    likes: z.string(),
    portfolio: z.string(),
    following: z.string(),
    followers: z.string()
})

export const zUnsplashProfileImage = z.object({
    small: z.string(),
    medium: z.string(),
    large: z.string()
})

export const zUnsplashSocial = z.object({
    instagram_username: z.string(),
    portfolio_url: z.string(),
    twitter_username: z.unknown().optional(),
    paypal_email: z.unknown().optional()
})

export const zUnsplashUser = z.object({
    id: z.string(),
    updated_at: z.date(),
    username: z.string(),
    name: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    twitter_username: z.unknown().optional(),
    portfolio_url: z.string(),
    bio: z.unknown().optional(),
    location: z.string(),
    links: zUnsplashUserLink,
    profile_image: zUnsplashProfileImage,
    instagram_username: z.string(),
    total_collections: z.number(),
    total_likes: z.number(),
    total_photos: z.number(),
    accepted_tos: z.boolean(),
    for_hire: z.boolean(),
    social: zUnsplashSocial
})

export const zUnsplashExif = z.object({
    make: z.string(),
    model: z.string(),
    name: z.string(),
    exposure_time: z.string(),
    aperture: z.string(),
    focal_length: z.string(),
    iso: z.number()
})

export const zUnsplashPosition = z.object({
    latitude: z.number(),
    longitude: z.number()
})

export const zUnsplashLocation = z.object({
    title: z.string(),
    name: z.string(),
    city: z.unknown().optional(),
    country: z.string(),
    position: zUnsplashPosition
})

export const zUnsplashPhotoData = z.object({
    id: z.string(),
    created_at: z.date(),
    updated_at: z.date(),
    promoted_at: z.date(),
    width: z.number(),
    height: z.number(),
    color: z.string(),
    blur_hash: z.string(),
    description: z.string(),
    alt_description: z.string(),
    urls: zUnsplashUrl,
    links: zUnsplashLink,
    categories: z.array(z.unknown()),
    likes: z.number(),
    liked_by_user: z.boolean(),
    current_user_collections: z.array(z.unknown()),
    sponsorship: z.unknown().optional(),
    topic_submissions: zUnsplashTopicSubmissions,
    user: zUnsplashUser,
    exif: zUnsplashExif,
    location: zUnsplashLocation,
    views: z.number(),
    downloads: z.number()
})

export const zUnsplashPhotoResult = z.object({
    type: z.string().optional(),
    status: z.number(),
    response: z.array(zUnsplashPhotoData).optional(),
    originalResponse: z.unknown()
})

export type UnsplashUrl = z.infer<typeof zUnsplashUrl>
export type UnsplashLink = z.infer<typeof zUnsplashLink>
export type UnsplashTopicSubmissions = z.infer<typeof zUnsplashTopicSubmissions>
export type UnsplashUserLinks = z.infer<typeof zUnsplashUserLink>
export type UnsplashProfileImage = z.infer<typeof zUnsplashProfileImage>
export type UnsplashSocial = z.infer<typeof zUnsplashSocial>
export type UnsplashUser = z.infer<typeof zUnsplashUser>
export type UnsplashExif = z.infer<typeof zUnsplashExif>
export type UnsplashPosition = z.infer<typeof zUnsplashPosition>
export type UnsplashLocation = z.infer<typeof zUnsplashLocation>
export type UnsplashPhotoData = z.infer<typeof zUnsplashPhotoData>
export type UnsplashPhotoResult = z.infer<typeof zUnsplashPhotoResult>

export const isUnsplashUrl = (inp?: unknown): inp is UnsplashUrl => zUnsplashUrl.safeParse(inp).success
export const isUnsplashLink = (inp?: unknown): inp is UnsplashLink => zUnsplashLink.safeParse(inp).success
export const isUnsplashTopicSubmissions = (inp?: unknown): inp is UnsplashTopicSubmissions => zUnsplashTopicSubmissions.safeParse(inp).success
export const isUnsplashUserLink = (inp?: unknown): inp is UnsplashUserLinks => zUnsplashUserLink.safeParse(inp).success
export const isUnsplashProfileImage = (inp?: unknown): inp is UnsplashProfileImage => zUnsplashProfileImage.safeParse(inp).success
export const isUnsplashSocial = (inp?: unknown): inp is UnsplashSocial => zUnsplashSocial.safeParse(inp).success
export const isUnsplashUser = (inp?: unknown): inp is UnsplashUser => zUnsplashUser.safeParse(inp).success
export const isUnsplashExif = (inp?: unknown): inp is UnsplashExif => zUnsplashExif.safeParse(inp).success
export const isUnsplashPosition = (inp?: unknown): inp is UnsplashPosition => zUnsplashPosition.safeParse(inp).success
export const isUnsplashLocation = (inp?: unknown): inp is UnsplashLocation => zUnsplashLocation.safeParse(inp).success
export const isUnsplashPhotoData = (inp?: unknown): inp is UnsplashPhotoData => zUnsplashPhotoData.safeParse(inp).success
export const isUnsplashPhotoResult = (inp?: unknown): inp is UnsplashPhotoResult => zUnsplashPhotoResult.safeParse(inp).success
