import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { BottomTab } from './BottomTab'

describe('BottomTab', () => {
    it('should mount', () => {
        render(<BottomTab />)

        const component = screen.getByTestId('BottomTab')

        expect(component).toBeTruthy()
    })
})
