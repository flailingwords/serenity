import { type FC, type JSX, lazy, Suspense } from 'react'

import type { WeatherNoConsentProps } from './WeatherNoConsent.types'

const LazyWeatherNoConsent = lazy(async () => await import('./WeatherNoConsent'))

type LazyProps = JSX.IntrinsicAttributes & WeatherNoConsentProps

const WeatherNoConsent: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyWeatherNoConsent {...props} />
    </Suspense>
)

export default WeatherNoConsent
