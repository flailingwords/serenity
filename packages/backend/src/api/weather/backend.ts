import { setInterval } from 'node:timers'

import {
    BackendService,
    getDebugger,
    getRandomId,
    isWeather,
    normalizeTime,
    type Weather,
    type WeatherCache,
    type WeatherCacheEntry,
    type WeatherCoords
} from 'serenity-shared'

import type { Debugger } from 'debug'


import { backendConfig } from '@/lib/config.js'

class WeatherBackendServiceImpl extends BackendService {
    cache: WeatherCache = {}
    intervalId: NodeJS.Timeout | undefined
    started = false
    instanceId: string = getRandomId()
    debug: Debugger = getDebugger('weather-backend').extend(this.instanceId)

    constructor() {
        super()

        this.debug('Creating backend service')

        this.cache = {}
    }

    async fetchWeather(cacheKey: string): Promise<Weather | undefined> {
        this.debug('Fetching weather for ' + cacheKey)

        const url = `https://api.weatherapi.com/v1/current.json?key=${backendConfig.weatherApi.key}&q=${cacheKey}`

        const response = await fetch(url)

        if (!response.ok) {
            const content = await response.text()
            this.debug(`Invalid fetchWeather result: ${response.status} -> ${response.statusText}\n\n${content}`)

            return undefined
        } else {
            const data: unknown = await response.json()

            if (!isWeather(data)) {
                this.debug('Invalid weather data')

                return undefined
            }

            return data
        }
    }

    async getWeather(coords: WeatherCoords): Promise<WeatherCacheEntry> {
        this.debug(`Getting weather for ${coords.latitude},${coords.longitude}`)

        const lat = parseFloat(coords.latitude.toFixed(2))
        const lng = parseFloat(coords.longitude.toFixed(2))
        const cacheKey = `${lat},${lng}`

        if (
            !(cacheKey in this.cache) ||
            typeof this.cache[cacheKey] === 'undefined' ||
            this.cache[cacheKey].expiryTime < Date.now() ||
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- Just to be sure
            this.cache[cacheKey].weather == null
        ) {
            this.debug('Fetching weather for ' + cacheKey)

            const weather = await this.fetchWeather(cacheKey)

            if (weather != null) {
                const cacheEntry: WeatherCacheEntry = {
                    ...this.cache[cacheKey],
                    ts: Date.now(),
                    weather,
                    expiryTime: Date.now() + normalizeTime(backendConfig.weatherApi.cache.time)
                }

                this.cache[cacheKey] = cacheEntry
            } else {
                this.debug(`Received null weather for cacheKey: [${cacheKey}]`)
            }
        }

        return this.cache[cacheKey]
    }

    maintenance(): void {
        this.debug('Maintenance')

        for (const key in this.cache) {
            if (this.cache[key].expiryTime < Date.now()) {
                // eslint-disable-next-line @typescript-eslint/no-dynamic-delete -- Trust me. I know what I'm doing!
                delete this.cache[key]
            }
        }
    }

    start(): void {
        this.debug('Starting backend service')

        if (this.started) return

        if (this.intervalId != null) this.stop()

        this.intervalId = setInterval(() => {
            this.maintenance()
        }, 60000)
        this.started = true
    }

    stop(): void {
        this.debug('Stopping backend service')

        if (this.intervalId != null) clearInterval(this.intervalId)
        this.started = false
    }
}

const getInstance = (): WeatherBackendServiceImpl => {
    let weatherBackendServiceInstance = GlobalInstanceManagerInstance.getInstance<WeatherBackendServiceImpl>('WeatherBackendService')

    if (weatherBackendServiceInstance == null) {
        weatherBackendServiceInstance = new WeatherBackendServiceImpl()

        if (GlobalInstanceManagerInstance.getInstance('WeatherBackendService') == null) {
            GlobalInstanceManagerInstance.saveInstance('WeatherBackendService', weatherBackendServiceInstance)
        }
    }

    weatherBackendServiceInstance.start()

    return weatherBackendServiceInstance
}

export default getInstance()
