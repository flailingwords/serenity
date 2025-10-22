import { type FC, lazy, Suspense, type JSX } from 'react'

import type { TasksItemProps } from './TaskItem.types'

const TaskItem = lazy(async () => await import('./TaskItem').then((module) => ({ default: module.TaskItem })))

type LazyProps = JSX.IntrinsicAttributes & TasksItemProps

export const LazyTaskItem: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <TaskItem {...props} />
    </Suspense>
)
