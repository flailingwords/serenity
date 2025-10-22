import { lazy, Suspense, type FC, type JSX } from 'react'

import type { ConditionalProps } from './Conditional.types'

const LazyConditional = lazy(async () => await import('./Conditional'))

type LazyProps = JSX.IntrinsicAttributes & ConditionalProps

const Conditional: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyConditional {...props} />
    </Suspense>
)

export default Conditional
