import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import LogoIcon from '../LogoIcon'

describe('LogoIcon', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<LogoIcon />)
    const logoIcon = screen.getByTestId('logo-icon')

    expect(logoIcon).toBeInTheDocument()
  })
})
