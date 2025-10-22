import { StrictMode } from 'react'

import ReactDOM from 'react-dom/client'

import '@/main.css'

import { App } from '@/components/App/App.tsx'

import { getRootElement } from './main.ui.js'

// Render the app
const rootElement = getRootElement('root')

const root = ReactDOM.createRoot(rootElement)

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)
