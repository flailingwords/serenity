import type { StoryFn } from '@storybook/react-vite'

import { ErrorBoundaryWrapper } from './ErrorBoundaryWrapper'

export default {
    title: 'Component/ErrorBoundaryWrapper'
}

export const Default: StoryFn = () => <ErrorBoundaryWrapper handle={'error'}>Test</ErrorBoundaryWrapper>
