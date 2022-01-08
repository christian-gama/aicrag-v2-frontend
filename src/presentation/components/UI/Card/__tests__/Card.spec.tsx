import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import Card from '..'
import { CardVariants } from '../stylesheet/recipes/cardRecipe.css'

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

  it('should be centered if centered prop is true', () => {
    makeSut({ centered: true })

    const card = screen.queryByTestId('card')

    expect(card).toHaveStyle('position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);')
  })

  it('should not be centered if centered prop is false', () => {
    makeSut({ centered: false })

    const card = screen.queryByTestId('card')

    expect(card).not.toHaveStyle('margin-right: auto; margin-left: auto;')
  })

  it('should have roundness if roundness prop is set', () => {
    makeSut({ roundness: 'sm' })

    const card = screen.queryByTestId('card')

    expect(card).toHaveStyle('border-radius: 3px;')
  })

  it('should have roundness set as md as default', () => {
    makeSut()

    const card = screen.queryByTestId('card')

    expect(card).toHaveStyle('border-radius: 5px;')
  })
})
