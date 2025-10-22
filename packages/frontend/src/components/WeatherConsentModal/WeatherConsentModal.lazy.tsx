import { type FC, lazy, Suspense, type JSX } from 'react'

import type { WeatherConsentModalProps } from './WeatherConsentModal.types'

const LazyWeatherConsentModal = lazy(async () => await import('./WeatherConsentModal'))

type LazyProps = JSX.IntrinsicAttributes & WeatherConsentModalProps

const WeatherConsentModal: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyWeatherConsentModal {...props} />
    </Suspense>
)

export default WeatherConsentModal
