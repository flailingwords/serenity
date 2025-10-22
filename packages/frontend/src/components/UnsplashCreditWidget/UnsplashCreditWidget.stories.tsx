import type { StoryFn } from '@storybook/react-vite'

import { UnsplashCreditWidget } from './UnsplashCreditWidget'

export default {
    title: 'Widgets/UnsplashCreditWidget'
}

export const Default: StoryFn = () => <UnsplashCreditWidget />
