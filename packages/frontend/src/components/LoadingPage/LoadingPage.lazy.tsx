import { lazy, Suspense, type FC, type JSX } from 'react'

import type { LoadingPageProps } from './LoadingPage.types'

const LazyLoadingPage = lazy(async () => await import('./LoadingPage'))

type LazyProps = JSX.IntrinsicAttributes & LoadingPageProps

const LoadingPage: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyLoadingPage {...props} />
    </Suspense>
)

export default LoadingPage
