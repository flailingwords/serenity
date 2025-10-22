import { serve } from '@hono/node-server'
import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { poweredBy } from 'hono/powered-by'

import testAPIRoute from './api/test/index.js'
import unsplashAPIRoute from './api/unsplash/index.js'
import weatherAPIRoute from './api/weather/index.js'
import { backendConfig } from './lib/config.js'

const app = new Hono()

app.use(poweredBy())
app.use(logger())

app.route('/api/test', testAPIRoute)
app.route('/api/unsplash', unsplashAPIRoute)
app.route('/api/weather', weatherAPIRoute)
app.all('/api/*', (ctx) => {
    ctx.status(404)
    return ctx.json({ result: 'ERROR', error: 'API not found' })
})

app.use(
    '*',
    serveStatic({
        root: backendConfig.wwwpath
    })
)

app.use(
    '/*',
    serveStatic({
        root: backendConfig.wwwpath,
        path: 'index.html'
    })
)

// app.get('/', (c) => c.text('Hello Node.js!'))

const server = serve({ fetch: app.fetch, port: 8787 }, (info) => {
    console.log(`Listening on http://localhost:${info.port}`) // Listening on http://localhost:3000
})

process.on('SIGINT', () => {
    server.close()
    process.exit(0)
})
process.on('SIGTERM', () => {
    server.close((err) => {
        if (err != null) {
            console.error(err)
            process.exit(1)
        }
        process.exit(0)
    })
})
