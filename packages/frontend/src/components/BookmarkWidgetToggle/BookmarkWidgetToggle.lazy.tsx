import { lazy, Suspense, type FC, type JSX } from 'react'

import type { BookmarkWidgetToggleProps } from './BookmarkWidgetToggle.types'

const LazyBookmarkWidgetToggle = lazy(async () => await import('./BookmarkWidgetToggle'))

type LazyProps = JSX.IntrinsicAttributes & BookmarkWidgetToggleProps

const BookmarkWidgetToggle: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyBookmarkWidgetToggle {...props} />
    </Suspense>
)

export default BookmarkWidgetToggle
