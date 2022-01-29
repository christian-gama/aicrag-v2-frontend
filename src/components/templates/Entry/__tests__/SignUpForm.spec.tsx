import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { popoverVar } from '@/external/graphql/reactiveVars/popoverVar'
import OverlayRoot from '@/tests/helpers/overlayRoot'
import renderWithProviders from '@/tests/helpers/renderWithProviders'
import waitFetch from '@/tests/helpers/waitFetch'
import sendWelcomeEmailMock from '@/tests/mocks/queries/sendWelcomeEmail.mock'
import signUpMock from '@/tests/mocks/queries/signUp.mock'
import variablesMock from '@/tests/mocks/variables.mock'
import SignUpForm from '../SignUpForm'

describe('SignUpForm', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('renders correctly', () => {
    renderWithProviders(<SignUpForm />)
    const signInForm = screen.getByTestId('form')

    expect(signInForm).toBeInTheDocument()
  })

  it('submits the form', async () => {
    const popoverVarSpy = jest.spyOn(popoverVar, 'setPopover')
    renderWithProviders(<SignUpForm />, {
      apolloMocks: [signUpMock(), sendWelcomeEmailMock()]
    })
    const form = screen.getByTestId('form')
    const [name, email, password, passwordConfirmation] =
      screen.getAllByTestId('base-input')

    userEvent.type(name, variablesMock.name)
    userEvent.type(email, variablesMock.email)
    userEvent.type(password, variablesMock.password)
    userEvent.type(passwordConfirmation, variablesMock.password)
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
