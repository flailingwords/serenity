import { lazy, Suspense, type FC, type JSX } from 'react'

import type { DraggableProps } from './Draggable.types'

const LazyDraggable = lazy(async () => await import('./Draggable'))

type LazyProps = JSX.IntrinsicAttributes & DraggableProps

const Draggable: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyDraggable {...props} />
    </Suspense>
)

export default Draggable
