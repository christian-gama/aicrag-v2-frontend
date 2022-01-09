import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import Card from '..'
import { CardVariants } from '../stylesheet/Card.css'

const makeSut = (style?: { centered?: CardVariants['centered'], roundness?: CardVariants['roundness'] }): void => {
  render(<Card centered={style?.centered} roundness={style?.roundness} />)
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
})
