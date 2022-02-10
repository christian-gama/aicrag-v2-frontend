import { popoverVar } from '@/external/graphql/reactiveVars'
import { formUtils, renderWithProviders, setupTests } from '@/tests/helpers'
import { mockVariables } from '@/tests/mocks'
import { updatePasswordMock } from '@/tests/mocks/queries'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AccountSecurity } from '..'

describe('AccountSecurity', () => {
  setupTests()

  it('renders correctly', async () => {
    await renderWithProviders(<AccountSecurity />)
    const accountData = screen.getByTestId('account-security')

    expect(accountData).toBeInTheDocument()
  })

  it('submits the form', async () => {
    const popoverVarSpy = jest.spyOn(popoverVar, 'setPopover')
    await renderWithProviders(<AccountSecurity />, {
      apolloMocks: [updatePasswordMock()]
    })
    const [currentPassword, password, passwordConfirmation] =
      screen.getAllByTestId('base-input')

    userEvent.type(currentPassword, mockVariables.currentPassword)
    userEvent.type(password, mockVariables.password)
    userEvent.type(passwordConfirmation, mockVariables.passwordConfirmation)
    await formUtils.submitForm()

    expect(popoverVarSpy).toHaveBeenCalledWith(expect.anything(), 'success')
  })
})
