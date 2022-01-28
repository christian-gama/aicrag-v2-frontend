import { fireEvent } from '@storybook/testing-library'
import { cleanup, screen, waitFor } from '@testing-library/react'
import React from 'react'
import OverlayRoot from '@/tests/helpers/overlayRoot'
import renderWithProviders from '@/tests/helpers/renderWithProviders'
import verifyResetPasswordTokenMock from '@/tests/mocks/queries/verifyResetPasswordToken.mock'
import ResetPasswordForm from '../ResetPasswordForm'

describe('ResetPasswordForm', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('renders correctly', async () => {
    renderWithProviders(<ResetPasswordForm />, {
      apolloMocks: [verifyResetPasswordTokenMock()]
    })
    await waitFor(() => screen.getByTestId('form'))
    const resetPassword = screen.getByTestId('reset-password')

    expect(resetPassword).toBeInTheDocument()
  })

  it('displays the form if params is valid', async () => {
    renderWithProviders(<ResetPasswordForm />, {
      apolloMocks: [verifyResetPasswordTokenMock()]
    })
    await waitFor(() => screen.getByTestId('form'))
    const form = screen.getByTestId('form')

    expect(form).toBeInTheDocument()
  })

  it('submits the form', async () => {
    renderWithProviders(<ResetPasswordForm />, {
      apolloMocks: [verifyResetPasswordTokenMock()]
    })
    await waitFor(() => screen.getByTestId('form'))
    const form = screen.getByTestId('form')

    fireEvent.submit(form)

    await waitFor(() => expect(form).toBeInTheDocument())
  })
})
