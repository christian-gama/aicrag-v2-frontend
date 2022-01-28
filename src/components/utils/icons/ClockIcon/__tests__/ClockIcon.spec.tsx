import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import ClockIcon from '../ClockIcon'

describe('ClockIcon ', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<ClockIcon />)
    const clockIcon = screen.getByTestId('clock-icon')

    expect(clockIcon).toBeInTheDocument()
  })
})
