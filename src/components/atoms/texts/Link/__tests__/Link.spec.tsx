import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import Link from '../Link'

describe('Link', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<Link to="/" />, { wrapper: MemoryRouter })
    const link = screen.getByTestId('link')

    expect(link).toBeInTheDocument()
  })
})
