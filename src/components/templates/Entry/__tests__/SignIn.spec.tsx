import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { authVar } from '@/external/graphql/reactiveVars'
import { formUtils, renderWithProviders, setupTests } from '@/tests/helpers'
import { mockVariables } from '@/tests/mocks'
import { loginMock } from '@/tests/mocks/queries'
import { SignIn } from '..'

describe('SignIn', () => {
  setupTests()

  it('renders correctly', async () => {
    await renderWithProviders(<SignIn />)

    expect(formUtils.form).toBeInTheDocument()
  })

  it('submits the form', async () => {
    await renderWithProviders(<SignIn />, { apolloMocks: [loginMock()] })
    const [email, password] = screen.getAllByTestId('base-input')

    userEvent.type(email, mockVariables.email)
    userEvent.type(password, mockVariables.password)
    await formUtils.submitForm()

    expect(formUtils.form).toBeInTheDocument()
  })

  it('calls partialLogin if account is inactive', async () => {
    const partialLoginSpy = jest.spyOn(authVar, 'partialLogin')
    await renderWithProviders(<SignIn />, {
      apolloMocks: [loginMock(undefined, { typename: 'InactiveAccount' })]
    })
    const [email, password] = screen.getAllByTestId('base-input')

    userEvent.type(email, mockVariables.email)
    userEvent.type(password, mockVariables.password)
    await formUtils.submitForm()

    expect(partialLoginSpy).toHaveBeenCalled()
  })

  it('calls login if account is active', async () => {
    const loginSpy = jest.spyOn(authVar, 'login')
    await renderWithProviders(<SignIn />, {
      apolloMocks: [loginMock()]
    })
    const [email, password] = screen.getAllByTestId('base-input')

    userEvent.type(email, mockVariables.email)
    userEvent.type(password, mockVariables.password)
    await formUtils.submitForm()

    expect(loginSpy).toHaveBeenCalled()
  })

  it('does not call login or partialLogin if submit receives an error', async () => {
    const loginSpy = jest.spyOn(authVar, 'login')
    const partialLoginSpy = jest.spyOn(authVar, 'partialLogin')
    await renderWithProviders(<SignIn />, {
      apolloMocks: [loginMock(undefined, { error: new Error() })]
    })
    const [email, password] = screen.getAllByTestId('base-input')

    userEvent.type(email, mockVariables.email)
    userEvent.type(password, mockVariables.password)
    await formUtils.submitForm()

    expect(loginSpy).not.toHaveBeenCalled()
    expect(partialLoginSpy).not.toHaveBeenCalled()
  })
})
