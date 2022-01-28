import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import Center from '../Center'

describe('Center', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<Center />)
    const center = screen.getByTestId('center')

    expect(center).toBeInTheDocument()
  })
})
