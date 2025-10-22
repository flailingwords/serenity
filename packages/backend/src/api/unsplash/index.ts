import { Hono } from 'hono'

import BackendService from './backend.js'

const app = new Hono()

app.get('/', async (ctx) => {
    const ts = Date.now()
    const photo = await BackendService.getRandomPhoto()

    ctx.status(200)
    return ctx.json({ ts, photo, instanceId: BackendService.instanceId })
})

export default app
