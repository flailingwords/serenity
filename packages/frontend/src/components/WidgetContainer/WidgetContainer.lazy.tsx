import { type FC, lazy, Suspense, type JSX } from 'react'

import type { WidgetContainerProps } from './WidgetContainer.types'

const LazyWidgetContainer = lazy(async () => await import('./WidgetContainer'))

type LazyProps = JSX.IntrinsicAttributes & WidgetContainerProps

const WidgetContainer: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyWidgetContainer {...props} />
    </Suspense>
)

export default WidgetContainer
