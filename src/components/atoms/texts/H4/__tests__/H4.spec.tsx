import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import H4 from '../H4'

describe('H4', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<H4 />)
    const h4 = screen.getByTestId('h4')

    expect(h4).toBeInTheDocument()
  })
})
