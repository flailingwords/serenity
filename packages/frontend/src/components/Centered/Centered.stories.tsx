import type { StoryFn } from '@storybook/react-vite'

import { Centered } from './Centered'

export default {
    title: 'Component/Centered'
}

export const Default: StoryFn = () => <Centered />
