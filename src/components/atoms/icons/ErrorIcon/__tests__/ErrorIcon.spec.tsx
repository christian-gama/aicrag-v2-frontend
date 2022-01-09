import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import ErrorIcon from '../ErrorIcon'

const makeSut = () => {
  return render(<ErrorIcon />)
}

describe('ErrorIcon ', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render correctly', () => {
    makeSut()

    const errorIcon = screen.getByTestId('error-icon')

    expect(errorIcon).toBeInTheDocument()
  })
})
