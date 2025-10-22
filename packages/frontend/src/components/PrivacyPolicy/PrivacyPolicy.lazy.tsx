import { lazy, Suspense, type FC, type JSX } from 'react'

import type { PrivacyPolicyProps } from './PrivacyPolicy.types'

const LazyPrivacyPolicy = lazy(async () => await import('./PrivacyPolicy'))

type LazyProps = JSX.IntrinsicAttributes & PrivacyPolicyProps

const PrivacyPolicy: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyPrivacyPolicy {...props} />
    </Suspense>
)

export default PrivacyPolicy
