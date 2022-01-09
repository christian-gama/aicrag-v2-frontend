import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import H3 from '../H3'

const makeSut = () => {
  return render(<H3 />)
}

describe('H3', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render H3 correctly', () => {
    makeSut()

    const h3 = screen.getByTestId('h3')

    expect(h3).toBeInTheDocument()
  })
})
