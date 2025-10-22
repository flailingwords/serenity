import { lazy, Suspense, type FC, type JSX } from 'react'

import type { AppProps } from './App.types'

const LazyApp = lazy(async () => await import('./App'))

type LazyProps = JSX.IntrinsicAttributes & AppProps

const App: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyApp {...props} />
    </Suspense>
)

export default App
