import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import P from '../P'

describe('P', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<P />)
    const p = screen.getByTestId('p')

    expect(p).toBeInTheDocument()
  })
})
