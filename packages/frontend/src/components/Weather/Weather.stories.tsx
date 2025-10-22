import type { StoryFn } from '@storybook/react-vite'

import { Centered } from '@/components/Centered/Centered'

import { Weather } from './Weather'

export default {
    title: 'Component/Weather'
}

export const Default: StoryFn = () => (
    <Centered>
        <Weather />
    </Centered>
)
