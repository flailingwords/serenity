import { lazy, Suspense, type FC, type JSX } from 'react'

import type { ConfigProviderProps } from './ConfigProvider.types'

const LazyConfigProvider = lazy(async () => await import('./ConfigProvider'))

type LazyProps = JSX.IntrinsicAttributes & ConfigProviderProps

const ConfigProvider: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyConfigProvider {...props} />
    </Suspense>
)

export default ConfigProvider
