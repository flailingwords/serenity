import type { WeatherNoConsentProps } from './WeatherNoConsent.types'
import type { StoryFn } from '@storybook/react-vite'

import { WeatherNoConsent } from './WeatherNoConsent'

export default {
    title: 'Component/WeatherNoConsent'
}

export const Default: StoryFn<WeatherNoConsentProps> = () => (
    <div className='container mx-auto'>
        <div className='flex justify-center'>
            <WeatherNoConsent />
        </div>
    </div>
)
