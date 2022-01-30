import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { popoverVar } from '@/external/graphql/reactiveVars'
import { OverlayRoot, renderWithProviders, waitFetch } from '@/tests/helpers'
import { mockVariables } from '@/tests/mocks'
import { signUpMock, sendWelcomeEmailMock } from '@/tests/mocks/queries'
import { SignUp } from '..'

describe('SignUp', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('renders correctly', () => {
    renderWithProviders(<SignUp />)
    const signInForm = screen.getByTestId('form')

    expect(signInForm).toBeInTheDocument()
  })

  it('submits the form', async () => {
    const popoverVarSpy = jest.spyOn(popoverVar, 'setPopover')
    renderWithProviders(<SignUp />, {
      apolloMocks: [signUpMock(), sendWelcomeEmailMock()]
    })
    const form = screen.getByTestId('form')
    const [name, email, password, passwordConfirmation] =
      screen.getAllByTestId('base-input')

    userEvent.type(name, mockVariables.name)
    userEvent.type(email, mockVariables.email)
    userEvent.type(password, mockVariables.password)
    userEvent.type(passwordConfirmation, mockVariables.password)
    fireEvent.submit(form)
    await waitFetch()

    await waitFor(() =>
      expect(popoverVarSpy).toHaveBeenCalledWith(
        expect.stringMatching(/\w/gi),
        'success'
      )
    )
  })
})