import type { TemplateNameProps } from './TemplateName.types'
import type { StoryFn } from '@storybook/react-vite'

import { TemplateName } from './TemplateName'

export default {
    title: 'Component/TemplateName'
}

export const Default: StoryFn<TemplateNameProps> = () => <TemplateName />
