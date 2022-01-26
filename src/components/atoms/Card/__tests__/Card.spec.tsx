import getElement from '@/tests/helpers/getElement'
import { cleanup, render } from '@testing-library/react'
import React from 'react'
import Card from '..'

describe('Card', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<Card />)
    const card = getElement('card')

    expect(card).toBeInTheDocument()
  })
})
