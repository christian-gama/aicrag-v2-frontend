import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import OverlayRoot from '@/tests/helpers/overlayRoot'
import renderWithProviders from '@/tests/helpers/renderWithProviders'
import waitFetch from '@/tests/helpers/waitFetch'
import forgotPasswordMock from '@/tests/mocks/queries/forgotPassword.mock'
import sendRecoverPasswordEmailMock from '@/tests/mocks/queries/sendRecoverPasswordEmail'
import variablesMock from '@/tests/mocks/variables.mock'
import ForgotPasswordForm from '../ForgotPasswordForm'

describe('ForgotPasswordForm', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('renders correctly', () => {
    renderWithProviders(<ForgotPasswordForm />)
    const forgotPasswordForm = screen.getByTestId('form')

    expect(forgotPasswordForm).toBeInTheDocument()
  })

  it('submits the form', async () => {
    renderWithProviders(<ForgotPasswordForm />, {
      apolloMocks: [forgotPasswordMock(), sendRecoverPasswordEmailMock()]
    })
    const forgotPasswordForm = screen.getByTestId('form')
    const inputs = screen.getAllByTestId('base-input')
    const email = inputs[0]

    userEvent.type(email, variablesMock.email)
    fireEvent.submit(forgotPasswordForm)
    await waitFetch()

    await waitFor(() => {
      const countdown = screen.getByRole('button', {
        name: /60 s/i
      })

      expect(countdown).toBeInTheDocument()
    })
  })
})
