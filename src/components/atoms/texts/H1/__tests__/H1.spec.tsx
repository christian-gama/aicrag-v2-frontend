import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import H1 from '../H1'

describe('H1', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<H1 />)
    const h1 = screen.getByTestId('h1')

    expect(h1).toBeInTheDocument()
  })
})
