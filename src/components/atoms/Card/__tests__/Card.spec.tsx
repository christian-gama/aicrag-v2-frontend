import { cleanup, render, screen } from '@testing-library/react'
import React, { ComponentPropsWithRef } from 'react'
import Card from '..'

const makeSut = ({
  centered,
  children,
  roundness,
  style,
  transparent
}: ComponentPropsWithRef<typeof Card>): void => {
  render(<Card centered={centered} roundness={roundness} />)
}

describe('Card', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render on the screen', () => {
    makeSut({})

    const card = screen.queryByTestId('card')

    expect(card).toBeInTheDocument()
  })
})
