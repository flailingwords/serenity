import { lazy, Suspense, type FC, type JSX } from 'react'

import type { BottomTabProps } from './BottomTab.types'

const LazyBottomTab = lazy(async () => await import('./BottomTab'))

type LazyProps = JSX.IntrinsicAttributes & BottomTabProps

const BottomTab: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyBottomTab {...props} />
    </Suspense>
)

export default BottomTab
