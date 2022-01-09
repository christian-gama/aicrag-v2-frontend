import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import LogoIcon from '../LogoIcon'

const makeSut = () => {
  return render(<LogoIcon />)
}

describe('LogoIcon', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render LogoIcon correctly', () => {
    makeSut()

    const logoIcon = screen.getByTestId('logo-icon')

    expect(logoIcon).toBeInTheDocument()
  })
})
