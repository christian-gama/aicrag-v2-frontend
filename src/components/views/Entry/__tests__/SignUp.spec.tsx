import { cleanup, screen } from '@testing-library/react'
import React from 'react'
import renderWithProviders from '@/tests/helpers/renderWithProviders'
import SignUp from '../SignUp'

describe('SignUp', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    renderWithProviders(<SignUp />)
    const button = screen.getByRole('button', {
      name: /criar conta/i
    })

    expect(button).toBeInTheDocument()
  })
})
