import { lazy, Suspense, type FC, type JSX } from 'react'

import type { WeatherWaitingForConsentProps } from './WeatherWaitingForConsent.types'

const LazyWeatherWaitingForConsent = lazy(async () => await import('./WeatherWaitingForConsent'))

type LazyProps = JSX.IntrinsicAttributes & WeatherWaitingForConsentProps

const WeatherWaitingForConsent: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyWeatherWaitingForConsent {...props} />
    </Suspense>
)

export default WeatherWaitingForConsent
