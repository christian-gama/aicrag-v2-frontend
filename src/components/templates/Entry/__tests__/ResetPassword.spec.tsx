import { cleanup, fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useWindowDimensions } from '@/components/_hooks'
import { OverlayRoot, renderWithProviders, waitFetch } from '@/tests/helpers'
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

jest.mock('../../../_hooks/useWindowDimensions')
const useWindowDimensionsMock = useWindowDimensions as jest.Mock

describe('ResetPassword', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
    useWindowDimensionsMock.mockRestore()
  })

  beforeEach(() => {
    useWindowDimensionsMock.mockReturnValue({ width: 520, height: 520 })
    overlayRoot.addOverlayRoot()
  })

  it('renders correctly', async () => {
    renderWithProviders(<ResetPassword />, {
      apolloMocks: [verifyResetPasswordTokenMock()]
    })
    await waitFetch()
    const resetPassword = screen.getByTestId('reset-password')

    expect(resetPassword).toBeInTheDocument()
  })

  it('displays the form if params is valid', async () => {
    renderWithProviders(<ResetPassword />, {
      apolloMocks: [verifyResetPasswordTokenMock()]
    })
    await waitFetch()
    const form = screen.getByTestId('form')

    expect(form).toBeInTheDocument()
  })

  it('submits the form and redirects afterwards', async () => {
    renderWithProviders(<ResetPassword />, {
      apolloMocks: [verifyResetPasswordTokenMock(), resetPasswordMock()]
    })
    await waitFetch()
    const form = screen.getByTestId('form')
    const [password, passwordConfirmation] = screen.getAllByTestId('base-input')

    userEvent.type(password, mockVariables.password)
    userEvent.type(passwordConfirmation, mockVariables.passwordConfirmation)
    fireEvent.submit(form)
    await waitFetch()

    expect(mockNavigate).toHaveBeenCalled()
  })

  it('display loading screen while fetching data', async () => {
    renderWithProviders(<ResetPassword />, {
      apolloMocks: [verifyResetPasswordTokenMock()]
    })
    const loadingSpinner = screen.getByTestId('loading-spinner-icon')

    expect(loadingSpinner).toBeInTheDocument()
  })

  it('calls navigate on error', async () => {
    renderWithProviders(<ResetPassword />, {
      apolloMocks: [verifyResetPasswordTokenMock(new Error())]
    })
    await waitFetch()

    expect(mockNavigate).toHaveBeenCalled()
  })

  it('renders with text even with view width lesser or equal to 520', async () => {
    useWindowDimensionsMock.mockReturnValue({ width: 520 })
    renderWithProviders(<ResetPassword />, {
      apolloMocks: [verifyResetPasswordTokenMock()]
    })
    await waitFetch()
    const text = screen.getByText(/resete/gi)

    expect(text).toBeInTheDocument()
  })
})