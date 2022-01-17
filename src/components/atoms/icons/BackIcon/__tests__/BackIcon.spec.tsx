import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import BackIcon from '../BackIcon'

const makeSut = () => {
  return render(<BackIcon />)
}

describe('BackIcon', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render BackIcon correctly', () => {
    makeSut()

    const backIcon = screen.getByTestId('back-icon')

    expect(backIcon).toBeInTheDocument()
  })
})
