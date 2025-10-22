import { createContext } from 'react'

import type { ConfigContextValue } from './ConfigProvider.types'

export const ConfigContext = createContext<ConfigContextValue>({})
