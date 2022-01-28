import { cleanup, screen } from '@testing-library/react'
import React from 'react'
import renderWithProviders from '@/tests/helpers/renderWithProviders'
import Left from '../Left'

describe('Left', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    renderWithProviders(<Left />)
    const logo = screen.getByTestId('logo-icon')

    expect(logo).toBeInTheDocument()
  })
})
