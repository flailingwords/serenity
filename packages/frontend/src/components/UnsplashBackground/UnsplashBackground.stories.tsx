import type { UnsplashBackgroundProps } from './UnsplashBackground.types'
import type { StoryFn } from '@storybook/react-vite'

import { UnsplashBackground } from './UnsplashBackground'

export default {
    title: 'Component/UnsplashBackground'
}

export const Default: StoryFn<UnsplashBackgroundProps> = () => <UnsplashBackground />
