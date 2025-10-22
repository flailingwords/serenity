import type { FC } from 'react'

import type { ConfigContextValue, ConfigProviderProps } from './ConfigProvider.types'

import useSWR from 'swr'

import { LoadingPage } from '@/components/LoadingPage/LoadingPage'

import { ConfigContext } from './ConfigContext'

export const ConfigProvider: FC<ConfigProviderProps> = ({ children }) => {
    const { data: config } = useSWR<ConfigContextValue>('/config.json')

    if (config == null) return <LoadingPage />

    return (
        <ConfigContext.Provider value={config} data-testid='ConfigProvider'>
            {children}
        </ConfigContext.Provider>
    )
}

export default ConfigProvider
