import type { BottomTabProps } from './BottomTab.types'
import type { StoryFn } from '@storybook/react-vite'

import { BottomTab } from './BottomTab'

export default {
    title: 'Component/BottomTab'
}

export const Default: StoryFn<BottomTabProps> = () => <BottomTab />
