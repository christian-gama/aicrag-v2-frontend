import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import Card from '..'

describe('Card', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<Card />)
    const card = screen.queryByTestId('card')

    expect(card).toBeInTheDocument()
  })
})
