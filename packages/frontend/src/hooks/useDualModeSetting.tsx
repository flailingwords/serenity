import { defaultDualMode } from 'serenity-shared'

import { useStateMachine } from './useStateMachine'

export const useDualModeSetting = (): [boolean, (val: boolean) => void] => useStateMachine<boolean>('dualMode', defaultDualMode)
