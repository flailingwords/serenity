import { defaultScientificMode } from 'serenity-shared'

import { useStateMachine } from './useStateMachine'

export const useScientificModeSetting = (): [boolean, (val: boolean) => void] => useStateMachine<boolean>('scientificMode', defaultScientificMode)
