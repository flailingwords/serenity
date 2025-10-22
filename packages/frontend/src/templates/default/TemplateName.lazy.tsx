import { type FC, lazy, Suspense, type JSX } from 'react'

import type { TemplateNameProps } from './TemplateName.types'

const LazyTemplateName = lazy(async () => await import('./TemplateName'))

type LazyProps = JSX.IntrinsicAttributes & TemplateNameProps

const TemplateName: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyTemplateName {...props} />
    </Suspense>
)

export default TemplateName
