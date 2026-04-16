// vite.config.ts
import tailwindcss from '@tailwindcss/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        port: 3000,
        proxy: {
            '/api': 'http://localhost:8787'
        }
    },

    plugins: [tailwindcss(), viteReact()],

    resolve: {
        tsconfigPaths: true
    }
})
