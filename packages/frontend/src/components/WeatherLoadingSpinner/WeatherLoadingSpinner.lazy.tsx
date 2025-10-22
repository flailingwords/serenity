import { type FC, lazy, Suspense, type JSX } from 'react'

import type { WeatherLoadingSpinnerProps } from './WeatherLoadingSpinner.types'

const LazyWeatherLoadingSpinner = lazy(async () => await import('./WeatherLoadingSpinner'))

type LazyProps = JSX.IntrinsicAttributes & WeatherLoadingSpinnerProps

const WeatherLoadingSpinner: FC<LazyProps> = (props: LazyProps) => (
    <Suspense fallback={null}>
        <LazyWeatherLoadingSpinner {...props} />
    </Suspense>
)

export default WeatherLoadingSpinner
