import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { formUtils, renderWithProviders, setupTests } from '@/tests/helpers'
import { mockVariables } from '@/tests/mocks'
import {
  forgotPasswordMock,
  sendRecoverPasswordEmailMock
} from '@/tests/mocks/queries'
import { ForgotPassword } from '..'

describe('ForgotPassword', () => {
  setupTests()

  it('renders correctly', async () => {
    await renderWithProviders(<ForgotPassword />)

    expect(formUtils.form).toBeInTheDocument()
  })

  it('submits the form', async () => {
    await renderWithProviders(<ForgotPassword />, {
      apolloMocks: [forgotPasswordMock(), sendRecoverPasswordEmailMock()]
    })
    const inputs = screen.getAllByTestId('base-input')
    const email = inputs[0]

    userEvent.type(email, mockVariables.email)
    await formUtils.submitForm()

    await waitFor(() => {
      const countdown = screen.getByRole('button', {
        name: /60 s/i
      })

      expect(countdown).toBeInTheDocument()
    })
  })
})
