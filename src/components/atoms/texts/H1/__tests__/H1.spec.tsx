import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import H1 from '../H1'

const makeSut = () => {
  return render(<H1 />)
}

describe('H1', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render H1 correctly', () => {
    makeSut()

    const h1 = screen.getByTestId('h1')

    expect(h1).toBeInTheDocument()
  })
})
