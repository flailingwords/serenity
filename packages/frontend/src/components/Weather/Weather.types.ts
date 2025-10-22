import type { ReactNode } from 'react'

import type { WeatherObject, MeasurementsModes, ConsentTypes } from 'serenity-shared'

export interface WeatherProps {
    children?: ReactNode
}

export interface WeatherState {
    loading: boolean
    weather: WeatherObject
    measurementsMode: MeasurementsModes
    dualMode: boolean
    locationConsent: ConsentTypes
    showConsentModal: boolean
}
