import type { WeatherCurrentWeatherProps } from './WeatherCurrentWeather.types'
import type { StoryFn } from '@storybook/react-vite'

import { WeatherCurrentWeather } from './WeatherCurrentWeather'

export default {
    title: 'Component/WeatherCurrentWeather'
}

export const Default: StoryFn<WeatherCurrentWeatherProps> = () => <WeatherCurrentWeather />
