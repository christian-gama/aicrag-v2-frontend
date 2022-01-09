import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import CloseIcon from '../CloseIcon'

const makeSut = () => {
  return render(<CloseIcon />)
}

describe('CloseIcon ', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render correctly', () => {
    makeSut()

    const closeIcon = screen.getByTestId('close-icon')

    expect(closeIcon).toBeInTheDocument()
  })
})
