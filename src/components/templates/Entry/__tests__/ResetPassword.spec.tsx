import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { formUtils, renderWithProviders, setupTests } from '@/tests/helpers'
import { mockVariables } from '@/tests/mocks'
import {
  verifyResetPasswordTokenMock,
  resetPasswordMock
} from '@/tests/mocks/queries'
import { ResetPassword } from '..'

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}))

describe('ResetPassword', () => {
  setupTests()

  it('renders correctly', async () => {
    await renderWithProviders(<ResetPassword />, {
      apolloMocks: [verifyResetPasswordTokenMock()]
    })
    const resetPassword = screen.getByTestId('reset-password')

    expect(resetPassword).toBeInTheDocument()
  })

  it('displays the form if params is valid', async () => {
    await renderWithProviders(<ResetPassword />, {
      apolloMocks: [verifyResetPasswordTokenMock()]
    })

    expect(formUtils.form).toBeInTheDocument()
  })

  it('submits the form and redirects afterwards', async () => {
    await renderWithProviders(<ResetPassword />, {
      apolloMocks: [verifyResetPasswordTokenMock(), resetPasswordMock()]
    })

    const [password, passwordConfirmation] = screen.getAllByTestId('base-input')

    userEvent.type(password, mockVariables.password)
    userEvent.type(passwordConfirmation, mockVariables.passwordConfirmation)
    await formUtils.submitForm()

    expect(mockNavigate).toHaveBeenCalled()
  })

  it('calls navigate on error', async () => {
    await renderWithProviders(<ResetPassword />, {
      apolloMocks: [verifyResetPasswordTokenMock(new Error())]
    })

    expect(mockNavigate).toHaveBeenCalled()
  })
})
