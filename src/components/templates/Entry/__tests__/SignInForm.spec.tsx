import { cleanup, fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { authVar } from '@/external/graphql/reactiveVars/authVar'
import OverlayRoot from '@/tests/helpers/overlayRoot'
import renderWithProviders from '@/tests/helpers/renderWithProviders'
import sleep from '@/tests/helpers/sleep'
import loginMock from '@/tests/mocks/queries/login.mock'
import variablesMock from '@/tests/mocks/variables.mock'
import SignInForm from '../SignInForm'

describe('SignInForm', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('renders correctly', () => {
    renderWithProviders(<SignInForm />)
    const signInForm = screen.getByTestId('form')

    expect(signInForm).toBeInTheDocument()
  })

  it('submits the form', async () => {
    renderWithProviders(<SignInForm />, { apolloMocks: [loginMock()] })
    const form = screen.getByTestId('form')
    const [email, password] = screen.getAllByTestId('base-input')

    userEvent.type(email, variablesMock.email)
    userEvent.type(password, variablesMock.password)
    fireEvent.submit(form)

    await act(async () => {
      await sleep()
    })

    expect(form).toBeInTheDocument()
  })

  it('calls partialLogin if account is inactive', async () => {
    const partialLoginSpy = jest.spyOn(authVar, 'partialLogin')
    renderWithProviders(<SignInForm />, {
      apolloMocks: [loginMock(undefined, { typename: 'InactiveAccount' })]
    })
    const form = screen.getByTestId('form')
    const [email, password] = screen.getAllByTestId('base-input')

    userEvent.type(email, variablesMock.email)
    userEvent.type(password, variablesMock.password)
    fireEvent.submit(form)

    await act(async () => {
      await sleep()
    })

    expect(partialLoginSpy).toHaveBeenCalled()
  })

  it('calls login if account is active', async () => {
    const loginSpy = jest.spyOn(authVar, 'login')
    renderWithProviders(<SignInForm />, {
      apolloMocks: [loginMock()]
    })
    const form = screen.getByTestId('form')
    const [email, password] = screen.getAllByTestId('base-input')

    userEvent.type(email, variablesMock.email)
    userEvent.type(password, variablesMock.password)
    fireEvent.submit(form)

    await act(async () => {
      await sleep()
    })

    expect(loginSpy).toHaveBeenCalled()
  })

  it('does not call login or partialLogin if submit receives an error', async () => {
    const loginSpy = jest.spyOn(authVar, 'login')
    const partialLoginSpy = jest.spyOn(authVar, 'partialLogin')
    renderWithProviders(<SignInForm />, {
      apolloMocks: [loginMock(undefined, { error: new Error() })]
    })
    const form = screen.getByTestId('form')
    const [email, password] = screen.getAllByTestId('base-input')

    userEvent.type(email, variablesMock.email)
    userEvent.type(password, variablesMock.password)
    fireEvent.submit(form)

    await act(async () => {
      await sleep()
    })

    expect(loginSpy).not.toHaveBeenCalled()
    expect(partialLoginSpy).not.toHaveBeenCalled()
  })
})
