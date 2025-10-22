import React from 'react'

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { ConfigProvider } from './ConfigProvider'

describe('ConfigProvider', () => {
    it('should mount', () => {
        render(<ConfigProvider />)

        const component = screen.getByTestId('ConfigProvider')

        expect(component).toBeTruthy()
    })
})
