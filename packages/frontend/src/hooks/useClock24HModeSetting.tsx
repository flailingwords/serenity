import { defaultClock24HMode } from 'serenity-shared'

import { useStateMachine } from './useStateMachine'

export const useClock24HModeSetting = (): [boolean, (val: boolean) => void] => useStateMachine<boolean>('clock24HMode', defaultClock24HMode)
