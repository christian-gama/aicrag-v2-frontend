import { fireEvent, userEvent } from '@storybook/testing-library'
import { cleanup, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { authVar } from '@/external/graphql/reactiveVars/authVar'
import OverlayRoot from '@/tests/helpers/overlayRoot'
import renderWithProviders from '@/tests/helpers/renderWithProviders'
import sleep from '@/tests/helpers/sleep'
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
    await waitFor(() => screen.getByTestId('form'))
    const resetPassword = screen.getByTestId('reset-password')

    expect(resetPassword).toBeInTheDocument()
  })

  it('displays the form if params is valid and calls partialLogin', async () => {
    const partialLoginSpy = jest.spyOn(authVar, 'partialLogin')
    renderWithProviders(<ResetPasswordForm />, {
      apolloMocks: [verifyResetPasswordTokenMock()]
    })
    await waitFor(() => screen.getByTestId('form'))
    const form = screen.getByTestId('form')

    expect(form).toBeInTheDocument()
    expect(partialLoginSpy).toHaveBeenCalled()
  })

  it('submits the form and redirects afterwards', async () => {
    renderWithProviders(<ResetPasswordForm />, {
      apolloMocks: [verifyResetPasswordTokenMock(), resetPasswordMock()]
    })

    await act(async () => {
      await sleep()
    })

    const form = screen.getByTestId('form')
    const [password, passwordConfirmation] = screen.getAllByTestId('base-input')

    userEvent.type(password, variablesMock.password)
    userEvent.type(passwordConfirmation, variablesMock.passwordConfirmation)
    fireEvent.submit(form)

    await act(async () => {
      await sleep()
    })

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

    await act(async () => {
      await sleep()
    })

    expect(mockNavigate).toHaveBeenCalled()
  })
})
