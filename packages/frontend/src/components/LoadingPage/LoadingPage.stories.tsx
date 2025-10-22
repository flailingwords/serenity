import type { LoadingPageProps } from './LoadingPage.types'
import type { StoryFn } from '@storybook/react-vite'

import { LoadingPage } from './LoadingPage'

export default {
    title: 'Component/LoadingPage'
}

export const Default: StoryFn<LoadingPageProps> = () => <LoadingPage />
