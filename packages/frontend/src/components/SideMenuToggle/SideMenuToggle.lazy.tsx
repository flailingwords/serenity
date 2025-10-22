import { lazy, Suspense, type FC, type JSX } from 'react'

import type { SideMenuToggleProps } from './SideMenuToggle.types'

const LazySideMenuToggle = lazy(async () => await import('./SideMenuToggle'))

type LazyProps = JSX.IntrinsicAttributes & SideMenuToggleProps

const SideMenuToggle: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazySideMenuToggle {...props} />
    </Suspense>
)

export default SideMenuToggle
