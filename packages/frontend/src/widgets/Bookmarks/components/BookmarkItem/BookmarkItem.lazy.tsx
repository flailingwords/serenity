import { lazy, Suspense, type FC, type JSX } from 'react'

import type { BookmarkItemProps } from './BookmarkItem.types'

const LazyBookmark = lazy(async () => await import('./BookmarkItem'))

type LazyProps = JSX.IntrinsicAttributes & BookmarkItemProps

const Bookmark: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyBookmark {...props} />
    </Suspense>
)

export default Bookmark
