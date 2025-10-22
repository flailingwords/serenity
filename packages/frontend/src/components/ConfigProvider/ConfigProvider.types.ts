import type { ReactNode } from 'react'

export interface ConfigProviderProps {
    children?: ReactNode
}

export interface ConfigContextValue extends Record<string, unknown> {
    bgUpdateInterval?: number
    quoteUpdateInterval?: number
}
