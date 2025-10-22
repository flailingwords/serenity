import type { ReactNode } from 'react'

import type { ClockModes, MeasurementsModes } from 'serenity-shared'

export interface SettingsProps {
    children?: ReactNode
}

export interface SettingsState {
    clockMode: ClockModes
    measurementsMode: MeasurementsModes
    dualMode: boolean
}
