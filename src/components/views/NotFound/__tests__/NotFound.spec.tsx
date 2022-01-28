import { cleanup, screen } from '@testing-library/react'
import React from 'react'
import renderWithProviders from '@/tests/helpers/renderWithProviders'
import NotFound from '../NotFound'

describe('NotFound', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    renderWithProviders(<NotFound />)
    const notFoundView = screen.getByTestId('not-found')

    expect(notFoundView).toBeInTheDocument()
  })
})
