import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import H3 from '../H3'

describe('H3', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<H3 />)
    const h3 = screen.getByTestId('h3')

    expect(h3).toBeInTheDocument()
  })
})
