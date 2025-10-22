import { Hono } from 'hono'
import { isWeatherCoords, zValidatorWrapper, zWeatherRequest, type WeatherCoords } from 'serenity-shared'

import weatherBackendService from './backend.js'

const app = new Hono()

app.post('/', zValidatorWrapper('json', zWeatherRequest), async (ctx) => {
    const { coords } = await ctx.req.json<{ coords?: WeatherCoords }>()

    if (!isWeatherCoords(coords)) {
        ctx.status(400)

        return ctx.json({ result: 'ERROR', message: 'Missing or invalid coords' })
    } else {
        const { ts, weather, expiryTime } = await weatherBackendService.getWeather(coords)

        ctx.status(200)

        return ctx.json({ ts, weather, expiryTime, instanceId: weatherBackendService.instanceId })
    }
})

export default app
