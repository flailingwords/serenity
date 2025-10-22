import { lazy, Suspense, type FC, type JSX } from 'react'

import type { SideMenuProps } from './SideMenu.types'

const LazySideMenu = lazy(async () => await import('./SideMenu'))

type LazyProps = JSX.IntrinsicAttributes & SideMenuProps

const SideMenu: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazySideMenu {...props} />
    </Suspense>
)

export default SideMenu
