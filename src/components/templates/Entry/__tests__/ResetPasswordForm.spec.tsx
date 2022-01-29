import { fireEvent } from '@storybook/testing-library'
import { cleanup, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'
import OverlayRoot from '@/tests/helpers/overlayRoot'
import renderWithProviders from '@/tests/helpers/renderWithProviders'
import sleep from '@/tests/helpers/sleep'
import verifyResetPasswordTokenMock from '@/tests/mocks/queries/verifyResetPasswordToken.mock'
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

  it('displays the form if params is valid', async () => {
    renderWithProviders(<ResetPasswordForm />, {
      apolloMocks: [verifyResetPasswordTokenMock()]
    })
    await waitFor(() => screen.getByTestId('form'))
    const form = screen.getByTestId('form')

    expect(form).toBeInTheDocument()
  })

  it('submits the form', async () => {
    renderWithProviders(<ResetPasswordForm />, {
      apolloMocks: [verifyResetPasswordTokenMock()]
    })
    await waitFor(() => screen.getByTestId('form'))
    const form = screen.getByTestId('form')

    fireEvent.submit(form)

    await waitFor(() => expect(form).toBeInTheDocument())
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
