import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import Card from '../Card'

const makeSut = (centered?: boolean): void => {
  render(<Card centered={centered} />)
}

describe('Card', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render on the screen', () => {
    makeSut()

    const card = screen.queryByTestId('card')

    expect(card).toBeInTheDocument()
  })

  it('should be centered if centered prop is true', () => {
    makeSut(true)

    const card = screen.queryByTestId('card')

    expect(card).toHaveStyle('margin-right: auto; margin-left: auto;')
  })

  it('should not be centered if centered prop is false', () => {
    makeSut(false)

    const card = screen.queryByTestId('card')

    expect(card).not.toHaveStyle('margin-right: auto; margin-left: auto;')
  })
})
