import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { LoadingPage } from './LoadingPage'

describe('LoadingPage', () => {
    it('should mount', () => {
        render(<LoadingPage />)

        const component = screen.getByTestId('LoadingPage')

        expect(component).toBeTruthy()
    })
})
