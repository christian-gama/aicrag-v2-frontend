import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { formUtils, renderWithProviders, setupTests } from '@/tests/helpers'
import { mockVariables } from '@/tests/mocks'
import { signUpMock, sendWelcomeEmailMock } from '@/tests/mocks/queries'
import { SignUp } from '..'

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}))

describe('SignUp', () => {
  setupTests()

  it('renders correctly', async () => {
    await renderWithProviders(<SignUp />)

    expect(formUtils.form).toBeInTheDocument()
  })

  it('submits the form and redirects afterwards', async () => {
    await renderWithProviders(<SignUp />, {
      apolloMocks: [signUpMock(), sendWelcomeEmailMock()]
    })
    const [name, email, password, passwordConfirmation] =
      screen.getAllByTestId('base-input')

    userEvent.type(name, mockVariables.name)
    userEvent.type(email, mockVariables.email)
    userEvent.type(password, mockVariables.password)
    userEvent.type(passwordConfirmation, mockVariables.password)
    await formUtils.submitForm(180)

    expect(mockNavigate).toHaveBeenCalled()
  })
})
