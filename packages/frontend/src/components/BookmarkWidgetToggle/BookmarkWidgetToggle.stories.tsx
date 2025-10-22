import type { BookmarkWidgetToggleProps } from './BookmarkWidgetToggle.types'
import type { StoryFn } from '@storybook/react-vite'

import { BookmarkWidgetToggle } from './BookmarkWidgetToggle'

export default {
    title: 'Component/BookmarkWidgetToggle'
}

export const Default: StoryFn<BookmarkWidgetToggleProps> = () => <BookmarkWidgetToggle />
