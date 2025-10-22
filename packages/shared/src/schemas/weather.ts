/* eslint-disable @typescript-eslint/naming-convention -- external data */
import { z } from 'zod'

export const zWeatherCoords = z.looseObject({
    latitude: z.number().min(-90).max(90),
    longitude: z.number().min(-180).max(180)
})

export const zWeatherLocation = z.object({
    name: z.string(),
    region: z.string(),
    country: z.string(),
    lat: z.number(),
    lon: z.number(),
    tz_id: z.string(),
    localtime_epoch: z.number(),
    localtime: z.string()
})

export const zWeatherCondition = z.object({
    text: z.string(),
    icon: z.string(),
    code: z.number()
})

export const zWeatherCurrent = z.object({
    last_updated_epoch: z.number(),
    last_updated: z.string(),
    temp_c: z.number(),
    temp_f: z.number(),
    is_day: z.number(),
    condition: zWeatherCondition,
    wind_mph: z.number(),
    wind_kph: z.number(),
    wind_degree: z.number(),
    wind_dir: z.string(),
    pressure_mb: z.number(),
    pressure_in: z.number(),
    precip_mm: z.number(),
    precip_in: z.number(),
    humidity: z.number(),
    cloud: z.number(),
    feelslike_c: z.number(),
    feelslike_f: z.number(),
    vis_km: z.number(),
    vis_miles: z.number(),
    uv: z.number(),
    gust_mph: z.number(),
    gust_kph: z.number()
})

export const zWeather = z.object({
    location: zWeatherLocation,
    current: zWeatherCurrent
})

export const zWeatherCacheEntry = z.object({
    ts: z.number(),
    weather: zWeather,
    expiryTime: z.number(),
    instanceId: z.string().optional()
})

export const zWeatherCache = z.record(z.string(), zWeatherCacheEntry)

export const zWeatherBackendService = z.object({
    fetchWeather: z.function({ input: [z.string()], output: zWeather.optional() }),
    getWeather: z.function({ input: [zWeatherCoords], output: zWeatherCacheEntry }),
    maintenance: z.function(),
    start: z.function(),
    stop: z.function()
})

export const zWeatherInfo = z.object({
    location: zWeatherLocation.pick({ name: true }),
    current: zWeatherCurrent.pick({ temp_c: true, temp_f: true, condition: true })
})

export const zWeatherObject = z.object({
    weather: zWeatherInfo
})

export type WeatherCoords = z.infer<typeof zWeatherCoords>
export type WeatherLocation = z.infer<typeof zWeatherLocation>
export type WeatherCondition = z.infer<typeof zWeatherCondition>
export type WeatherCurrent = z.infer<typeof zWeatherCurrent>
export type Weather = z.infer<typeof zWeather>
export type WeatherCacheEntry = z.infer<typeof zWeatherCacheEntry>
export type WeatherCache = z.infer<typeof zWeatherCache>
export type WeatherBackendService = z.infer<typeof zWeatherBackendService>
export type WeatherInfo = z.infer<typeof zWeatherInfo>
export type WeatherObject = z.infer<typeof zWeatherObject>

export const isWeatherCoords = (inp?: unknown): inp is WeatherCoords => zWeatherCoords.safeParse(inp).success
export const isWeatherLocation = (inp?: unknown): inp is WeatherLocation => zWeatherLocation.safeParse(inp).success
export const isWeatherCondition = (inp?: unknown): inp is WeatherCondition => zWeatherCondition.safeParse(inp).success
export const isWeatherCurrent = (inp?: unknown): inp is WeatherCurrent => zWeatherCurrent.safeParse(inp).success
export const isWeather = (inp?: unknown): inp is Weather => zWeather.safeParse(inp).success
export const isWeatherCacheEntry = (inp?: unknown): inp is WeatherCacheEntry => zWeatherCacheEntry.safeParse(inp).success
export const isWeatherCache = (inp?: unknown): inp is WeatherCache => zWeatherCache.safeParse(inp).success
export const isIWeatherBackendService = (inp?: unknown): inp is WeatherBackendService => zWeatherBackendService.safeParse(inp).success
export const isWeatherInfo = (inp?: unknown): inp is WeatherInfo => zWeatherInfo.safeParse(inp).success
export const isWeatherObject = (inp?: unknown): inp is WeatherObject => zWeatherObject.safeParse(inp).success

export const zWeatherRequest = z.looseObject({
    coords: zWeatherCoords
})

export type WeatherRequest = z.infer<typeof zWeatherRequest>

export const isWeatherRequest = (inp?: unknown): inp is WeatherRequest => zWeatherRequest.safeParse(inp).success
