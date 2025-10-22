import type { ConfigProviderProps } from './ConfigProvider.types'
import type { StoryFn } from '@storybook/react-vite'

import { ConfigProvider } from './ConfigProvider'

export default {
    title: 'Component/ConfigProvider'
}

export const Default: StoryFn<ConfigProviderProps> = () => <ConfigProvider />
