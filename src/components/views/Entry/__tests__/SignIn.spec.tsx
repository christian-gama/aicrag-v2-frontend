import { cleanup, screen } from '@testing-library/react'
import React from 'react'
import renderWithProviders from '@/tests/helpers/renderWithProviders'
import SignIn from '../SignIn'

describe('SignIn', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    renderWithProviders(<SignIn />)
    const button = screen.getByRole('button', {
      name: /acessar/i
    })

    expect(button).toBeInTheDocument()
  })
})
