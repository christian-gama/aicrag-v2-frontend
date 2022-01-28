import { screen } from '@testing-library/react'
import React from 'react'
import renderWithProviders from '@/tests/helpers/renderWithProviders'
import ResetPasswordForm from '../ResetPasswordForm'

describe('ResetPasswordForm', () => {
  it('renders correctly', () => {
    renderWithProviders(<ResetPasswordForm />)

    const resetPassword = screen.getByTestId('reset-password')

    expect(resetPassword).toBeInTheDocument()
  })

  it('displays the form if params is valid', () => {
    renderWithProviders(<ResetPasswordForm />)

    const form = screen.getByTestId('form')

    expect(form).toBeInTheDocument()
  })
})
