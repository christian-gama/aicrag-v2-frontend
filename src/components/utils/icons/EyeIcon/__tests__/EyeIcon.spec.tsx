import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import EyeIcon from '..'

describe('EyeIcon', () => {
  afterEach(() => {
    cleanup()
  })

  it('displays eyeOpenIcon if showPassword is false', () => {
    render(<EyeIcon showPassword={false} />)
    const icon = screen.getByTestId('eye-open-icon')

    expect(icon).toBeInTheDocument()
  })

  it('displays eyeClosedIcon if showPassword is true', () => {
    render(<EyeIcon showPassword />)
    const icon = screen.getByTestId('eye-closed-icon')

    expect(icon).toBeInTheDocument()
  })
})
