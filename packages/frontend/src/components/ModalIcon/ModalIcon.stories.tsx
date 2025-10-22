import type { ModalIconProps } from './ModalIcon.types'
import type { StoryFn } from '@storybook/react-vite'

import { ModalIcon } from './ModalIcon'

export default {
    title: 'Component/ModalIcon'
}

export const Default: StoryFn<ModalIconProps> = () => <ModalIcon style={'default'} />
