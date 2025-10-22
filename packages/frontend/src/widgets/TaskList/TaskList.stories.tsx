import type { StoryFn } from '@storybook/react-vite'

import { TaskList } from './TaskList'

export default {
    title: 'Widgets/Task'
}

export const Default: StoryFn = () => <TaskList />
