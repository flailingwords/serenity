import { type FC, lazy, Suspense, type JSX } from 'react'

import type { QuotesWidgetProps } from './QuotesWidget.types'

const LazyQuotesWidget = lazy(async () => await import('./QuotesWidget'))

type LazyProps = JSX.IntrinsicAttributes & QuotesWidgetProps

const QuotesWidget: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyQuotesWidget {...props} />
    </Suspense>
)

export default QuotesWidget
