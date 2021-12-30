import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import EyeIcon from '..'

const makeSut = (showPassword: boolean): void => {
  render(<EyeIcon showPassword={showPassword} />)
}

describe('EyeIcon', () => {
  afterEach(() => {
    cleanup()
  })

  it('should display eyeOpenIcon if showPassword is false', () => {
    makeSut(false)

    const icon = screen.getByTestId('eyeOpenIcon')

    expect(icon).toBeInTheDocument()
  })

  it('should display eyeClosedIcon if showPassword is true', () => {
    makeSut(true)

    const icon = screen.getByTestId('eyeClosedIcon')

    expect(icon).toBeInTheDocument()
  })
})
