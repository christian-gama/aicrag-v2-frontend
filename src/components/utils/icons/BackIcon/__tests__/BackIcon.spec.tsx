import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import BackIcon from '../BackIcon'

describe('BackIcon', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<BackIcon />)
    const backIcon = screen.getByTestId('back-icon')

    expect(backIcon).toBeInTheDocument()
  })
})
