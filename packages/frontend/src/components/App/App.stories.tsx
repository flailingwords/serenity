import type { AppProps } from './App.types'
import type { StoryFn } from '@storybook/react-vite'

import { App } from './App'

export default {
    title: 'Component/App'
}

export const Default: StoryFn<AppProps> = () => <App />
