import { authVar, refetchInvoiceVar } from '@/external/graphql/reactiveVars'
import { OverlayRoot, renderWithProviders, waitFetch } from '@/tests/helpers'
import { mockVariables } from '@/tests/mocks'
import { userFragmentMock } from '@/tests/mocks/fragments'
import { getMeMock, updateMeMock } from '@/tests/mocks/queries'
import { cleanup, fireEvent, screen } from '@testing-library/react'
import { AccountData } from '..'

describe('AccountData', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
    jest.restoreAllMocks()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
    authVar.setUser({
      personal: {
        email: mockVariables.email,
        id: mockVariables.uuid,
        name: mockVariables.name
      },
      settings: {
        currency: 'BRL'
      }
    })
  })

  it('renders correctly', async () => {
    renderWithProviders(<AccountData />)
    await waitFetch()
    const accountData = screen.getByTestId('account-data')

    expect(accountData).toBeInTheDocument()
  })

  it('submits the form', async () => {
    const refetchSpy = jest.spyOn(refetchInvoiceVar, 'refetch')
    renderWithProviders(<AccountData />, {
      apolloMocks: [updateMeMock()]
    })
    await waitFetch()
    const form = screen.getByTestId('form')

    fireEvent.submit(form)
    await waitFetch()

    expect(refetchSpy).toHaveBeenCalled()
  })

  it('submits only email', async () => {
    const refetchSpy = jest.spyOn(refetchInvoiceVar, 'refetch')
    renderWithProviders(<AccountData />, {
      apolloMocks: [updateMeMock({ email: 'other@email.com' })]
    })
    await waitFetch()
    const form = screen.getByTestId('form')
    const emailInput = screen.getByRole('textbox', {
      name: /seu email/i
    })

    fireEvent.change(emailInput, { target: { value: 'other@email.com' } })
    fireEvent.submit(form)
    await waitFetch()

    expect(refetchSpy).toHaveBeenCalled()
  })

  it('submits only name', async () => {
    const refetchSpy = jest.spyOn(refetchInvoiceVar, 'refetch')
    renderWithProviders(<AccountData />, {
      apolloMocks: [updateMeMock({ name: 'other name' })]
    })
    await waitFetch()
    const form = screen.getByTestId('form')
    const nameInput = screen.getByRole('textbox', {
      name: /seu nome/i
    })

    fireEvent.change(nameInput, { target: { value: 'other name' } })
    fireEvent.submit(form)
    await waitFetch()

    expect(refetchSpy).toHaveBeenCalled()
  })

  it('does not submit currency if value is equal to user settings currency ', async () => {
    userFragmentMock.user.settings.currency = 'BRL'
    const refetchSpy = jest.spyOn(refetchInvoiceVar, 'refetch')
    renderWithProviders(<AccountData />, {
      apolloMocks: [updateMeMock({ currency: undefined })]
    })
    await waitFetch()
    const form = screen.getByTestId('form')
    const realRadioInput = screen.getByRole('radio', {
      name: /real/i
    })
    const usdRadioInput = screen.getByRole('radio', {
      name: /dólar/i
    })

    fireEvent.click(usdRadioInput)
    fireEvent.click(realRadioInput)
    fireEvent.submit(form)
    await waitFetch()

    expect(refetchSpy).toHaveBeenCalled()
  })

  it('submits only currency as BRL', async () => {
    userFragmentMock.user.settings.currency = 'BRL'
    const refetchSpy = jest.spyOn(refetchInvoiceVar, 'refetch')
    renderWithProviders(<AccountData />, {
      apolloMocks: [updateMeMock({ currency: 'USD' })]
    })
    await waitFetch()
    const form = screen.getByTestId('form')
    const usdRadioInput = screen.getByRole('radio', {
      name: /dólar/i
    })

    fireEvent.click(usdRadioInput)
    fireEvent.submit(form)
    await waitFetch()

    expect(refetchSpy).toHaveBeenCalled()
  })

  it('submits only currency as USD', async () => {
    userFragmentMock.user.settings.currency = 'USD'
    authVar.setUser({
      personal: {
        email: mockVariables.email,
        id: mockVariables.uuid,
        name: mockVariables.name
      },
      settings: {
        currency: 'USD'
      }
    })
    const refetchSpy = jest.spyOn(refetchInvoiceVar, 'refetch')
    renderWithProviders(<AccountData />, {
      apolloMocks: [getMeMock(), updateMeMock({ currency: 'BRL' })]
    })
    await waitFetch()
    const form = screen.getByTestId('form')
    const realRadioInput = screen.getByRole('radio', {
      name: /real/i
    })

    fireEvent.click(realRadioInput)
    fireEvent.submit(form)
    await waitFetch()

    expect(refetchSpy).toHaveBeenCalled()
  })

  it('checks the correct radio input', async () => {
    userFragmentMock.user.settings.currency = 'USD'
    authVar.setUser({
      personal: {
        email: mockVariables.email,
        id: mockVariables.uuid,
        name: mockVariables.name
      },
      settings: {
        currency: 'USD'
      }
    })
    renderWithProviders(<AccountData />, {
      apolloMocks: [getMeMock(), updateMeMock({ name: 'other name' })]
    })
    await waitFetch()
    const brlRadioInput = screen.getByRole('radio', {
      name: /real/i
    })
    const usdRadioInput = screen.getByRole('radio', {
      name: /dólar/i
    })

    expect(brlRadioInput).not.toBeChecked()
    expect(usdRadioInput).toBeChecked()
  })
})
