import { cleanup, screen } from '@testing-library/react'
import React from 'react'
import renderWithProviders from '@/tests/helpers/renderWithProviders'
import ForgotPassword from '../ForgotPassword'

describe('ForgotPassword', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    renderWithProviders(<ForgotPassword />)
    const heading = screen.getByRole('heading', {
      name: /esqueceu sua senha\?/i
    })

    expect(heading).toBeInTheDocument()
  })
})
