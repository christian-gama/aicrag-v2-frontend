import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import H2 from '../H2'

describe('H2', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<H2 />)
    const h2 = screen.getByTestId('h2')

    expect(h2).toBeInTheDocument()
  })
})
