import type { SourceCreditProps } from './SourceCredit.types'
import type { StoryFn } from '@storybook/react-vite'

import { SourceCredit } from './SourceCredit'

export default {
    title: 'Component/SourceCredit'
}

export const Default: StoryFn<SourceCreditProps> = () => <SourceCredit />
