import type { SideMenuToggleProps } from './SideMenuToggle.types'
import type { StoryFn } from '@storybook/react-vite'

import { SideMenuToggle } from './SideMenuToggle'

export default {
    title: 'Component/SideMenuToggle'
}

export const Default: StoryFn<SideMenuToggleProps> = () => <SideMenuToggle />
