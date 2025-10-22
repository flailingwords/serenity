import { useMemo } from 'react'

import {
    type Weather,
    isWeatherCoords,
    isConsentStateAccepted,
    type WeatherCacheEntry,
    weatherFetcher,
    isWeatherCacheEntry,
    zWeatherCacheEntry
} from 'serenity-shared'
import useSWR from 'swr'

import { useGeoLocation } from './useGeoLocation'
import { useLocationConsent } from './useLocationConsent'

interface UseWeatherReturn {
    weather?: Weather
    isInFlux: boolean
    error?: unknown
}

export const useWeather = (): UseWeatherReturn => {
    const { coords, isGeolocationAvailable, isGeolocationEnabled } = useGeoLocation()

    const [locationConsent] = useLocationConsent()

    const enableUpdates = useMemo(() => {
        const haveCoords = isWeatherCoords(coords)

        return isConsentStateAccepted(locationConsent) && isGeolocationAvailable && isGeolocationEnabled && haveCoords
    }, [locationConsent, isGeolocationAvailable, isGeolocationEnabled, coords])

    const { data, error, isLoading, isValidating } = useSWR<WeatherCacheEntry, Error>(
        [enableUpdates ? '/api/weather' : null, enableUpdates && coords != null ? coords : null],
        async ([_resource, coords]: [string, GeolocationCoordinates]) => {
            const result = await weatherFetcher(coords)

            if (!isWeatherCacheEntry(result)) throw new Error(zWeatherCacheEntry.safeParse(result).error?.message ?? 'Unknown error')

            return result
        },
        {
            refreshInterval: 1800000
        }
    )

    return { weather: data?.weather, error, isInFlux: isLoading || isValidating }
}
