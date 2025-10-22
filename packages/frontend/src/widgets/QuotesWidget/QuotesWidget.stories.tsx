import type { QuotesWidgetProps } from './QuotesWidget.types'
import type { StoryFn } from '@storybook/react-vite'

import { QuotesWidget } from './QuotesWidget'

export default {
    title: 'Component/QuotesWidget'
}

export const Default: StoryFn<QuotesWidgetProps> = () => <QuotesWidget />
