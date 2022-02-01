import { render, cleanup, screen } from '@testing-library/react'
import { ClockIcon } from '..'
import React from 'react'

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
