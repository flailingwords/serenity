import { lazy, Suspense, type FC, type JSX } from 'react'

import type { SourceCreditProps } from './SourceCredit.types'

const LazySourceCredit = lazy(async () => await import('./SourceCredit'))

type LazyProps = JSX.IntrinsicAttributes & SourceCreditProps

const SourceCredit: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazySourceCredit {...props} />
    </Suspense>
)

export default SourceCredit
