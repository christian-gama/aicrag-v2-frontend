import { makeAccessTokenStorage } from '@/external/factories/storage/auth'
import { popoverVar } from '@/external/graphql/reactiveVars'
import { OverlayRoot, renderWithProviders, waitFetch } from '@/tests/helpers'
import { mockVariables } from '@/tests/mocks'
import { sendWelcomeEmailMock } from '@/tests/mocks/queries'
import { activateAccountMock } from '@/tests/mocks/queries/activateAccount.mock'
import { cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ConfirmEmailView } from '..'

describe('ConfirmAccountView', () => {
  const accessTokenStorage = makeAccessTokenStorage()
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    overlayRoot.removeOverlayRoot()
    accessTokenStorage.reset()
    jest.restoreAllMocks()
    cleanup()
  })

  beforeEach(() => {
    accessTokenStorage.set(mockVariables.token)
    overlayRoot.addOverlayRoot()
  })

  it('renders correctly', () => {
    renderWithProviders(<ConfirmEmailView />)
    const confirmEmailView = screen.getByTestId('confirm-email-view')

    expect(confirmEmailView).toBeInTheDocument()
  })

  it('submits the form', async () => {
    const popoverSpy = jest.spyOn(popoverVar, 'setPopover')
    renderWithProviders(<ConfirmEmailView />, {
      apolloMocks: [activateAccountMock()]
    })
    const [pinInput] = screen.getAllByTestId('pin-input')

    userEvent.paste(pinInput, mockVariables.pin)
    await waitFetch()

    expect(popoverSpy).toHaveBeenCalled()
  })

  it('resends the email', async () => {
    renderWithProviders(<ConfirmEmailView />, {
      apolloMocks: [sendWelcomeEmailMock()]
    })
    const resendButton = (regex: RegExp) =>
      screen.getByRole('button', { name: regex })

    userEvent.click(resendButton(/reenviar/i))
    await waitFetch()

    expect(resendButton(/60 s/i)).toBeInTheDocument()
  })
})
