import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import ChevronIcon from '../ChevronIcon'

describe('ChevronIcon ', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<ChevronIcon />)
    const chevronIcon = screen.getByTestId('chevron-icon')

    expect(chevronIcon).toBeInTheDocument()
  })
})
