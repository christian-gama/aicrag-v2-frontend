import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import P from '../P'

const makeSut = () => {
  return render(<P />)
}

describe('P', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render P correctly', () => {
    makeSut()

    const p = screen.getByTestId('p')

    expect(p).toBeInTheDocument()
  })
})
