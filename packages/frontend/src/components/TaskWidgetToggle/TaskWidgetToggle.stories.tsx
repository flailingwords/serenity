import type { TasksWidgetToggleProps } from './TaskWidgetToggle.types'
import type { StoryFn } from '@storybook/react-vite'

import { TasksWidgetToggle } from './TaskWidgetToggle'

export default {
    title: 'Component/TaskWidgetToggle'
}

export const Default: StoryFn<TasksWidgetToggleProps> = () => <TasksWidgetToggle />
