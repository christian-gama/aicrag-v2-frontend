import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import Divider from '../Divider'

const makeSut = () => {
  return render(<Divider />)
}

describe('Divider', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render Divider correctly', () => {
    makeSut()

    const divider = screen.getByTestId('divider')

    expect(divider).toBeInTheDocument()
  })
})
