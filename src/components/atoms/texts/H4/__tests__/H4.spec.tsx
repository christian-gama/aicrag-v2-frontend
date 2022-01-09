import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import H4 from '../H4'

const makeSut = () => {
  return render(<H4 />)
}

describe('H4', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render H4 correctly', () => {
    makeSut()

    const h4 = screen.getByTestId('h4')

    expect(h4).toBeInTheDocument()
  })
})
