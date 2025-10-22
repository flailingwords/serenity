import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { App } from './App'

describe('App', () => {
    it('should mount', () => {
        render(<App />)

        const component = screen.getByTestId('App')

        expect(component).toBeTruthy()
    })
})
