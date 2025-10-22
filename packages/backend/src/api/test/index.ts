import { Hono } from 'hono'

const app = new Hono()

app.all('/', async (ctx) => {
    let message = 'PONG'

    const h = ctx.req.header('Content-Type')

    if (typeof h === 'string' && h.startsWith('application/json')) {
        const data = await ctx.req.json<{ message: string }>()

        if (typeof data === 'object' && !Array.isArray(data) && 'message' in data) {
            // eslint-disable-next-line @typescript-eslint/prefer-destructuring -- YOLO
            message = data.message
        }
    }

    ctx.status(200)

    return ctx.json({ result: 'PONG', ts: Date.now(), message })
})

export default app
