import { cleanup, fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { OverlayRoot, renderWithProviders, waitFetch } from '@/tests/helpers'
import { mockVariables } from '@/tests/mocks'
import {
  forgotPasswordMock,
  sendRecoverPasswordEmailMock
} from '@/tests/mocks/queries'
import { ForgotPassword } from '..'

describe('ForgotPassword', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('renders correctly', () => {
    renderWithProviders(<ForgotPassword />)
    const forgotPasswordForm = screen.getByTestId('form')

    expect(forgotPasswordForm).toBeInTheDocument()
  })

  it('submits the form', async () => {
    renderWithProviders(<ForgotPassword />, {
      apolloMocks: [forgotPasswordMock(), sendRecoverPasswordEmailMock()]
    })
    const forgotPasswordForm = screen.getByTestId('form')
    const inputs = screen.getAllByTestId('base-input')
    const email = inputs[0]

    userEvent.type(email, mockVariables.email)
    fireEvent.submit(forgotPasswordForm)
    await waitFetch()

    await waitFor(() => {
      const countdown = screen.getByRole('button', {
        name: /60 s/i
      })

      expect(countdown).toBeInTheDocument()
    })
  })
})
