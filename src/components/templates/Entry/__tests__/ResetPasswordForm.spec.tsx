import { fireEvent, userEvent } from '@storybook/testing-library'
import { cleanup, screen } from '@testing-library/react'
import React from 'react'
import OverlayRoot from '@/tests/helpers/overlayRoot'
import renderWithProviders from '@/tests/helpers/renderWithProviders'
import waitFetch from '@/tests/helpers/waitFetch'
import resetPasswordMock from '@/tests/mocks/queries/resetPassword.mock'
import verifyResetPasswordTokenMock from '@/tests/mocks/queries/verifyResetPasswordToken.mock'
import variablesMock from '@/tests/mocks/variables.mock'
import ResetPasswordForm from '../ResetPasswordForm'

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}))

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
    await waitFetch()
    const resetPassword = screen.getByTestId('reset-password')

    expect(resetPassword).toBeInTheDocument()
  })

  it('displays the form if params is valid', async () => {
    renderWithProviders(<ResetPasswordForm />, {
      apolloMocks: [verifyResetPasswordTokenMock()]
    })
    await waitFetch()
    const form = screen.getByTestId('form')

    expect(form).toBeInTheDocument()
  })

  it('submits the form and redirects afterwards', async () => {
    renderWithProviders(<ResetPasswordForm />, {
      apolloMocks: [verifyResetPasswordTokenMock(), resetPasswordMock()]
    })
    await waitFetch()
    const form = screen.getByTestId('form')
    const [password, passwordConfirmation] = screen.getAllByTestId('base-input')

    userEvent.type(password, variablesMock.password)
    userEvent.type(passwordConfirmation, variablesMock.passwordConfirmation)
    fireEvent.submit(form)
    await waitFetch()

    expect(mockNavigate).toHaveBeenCalled()
  })

  it('display loading screen while fetching data', async () => {
    renderWithProviders(<ResetPasswordForm />, {
      apolloMocks: [verifyResetPasswordTokenMock()]
    })
    const loadingSpinner = screen.getByTestId('loading-spinner-icon')

    expect(loadingSpinner).toBeInTheDocument()
  })

  it('calls navigate on error', async () => {
    renderWithProviders(<ResetPasswordForm />, {
      apolloMocks: [verifyResetPasswordTokenMock(new Error())]
    })
    await waitFetch()

    expect(mockNavigate).toHaveBeenCalled()
  })
})
