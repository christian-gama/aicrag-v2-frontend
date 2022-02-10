import { popoverVar, refetchInvoiceVar } from '@/external/graphql/reactiveVars'
import {
  formUtils,
  renderWithProviders,
  setupTests,
  setUser,
  waitFetch
} from '@/tests/helpers'
import { mockVariables } from '@/tests/mocks'
import {
  getMeMock,
  sendEmailPinMock,
  updateEmailByPinMock,
  updateMeMock
} from '@/tests/mocks/queries'
import { fireEvent, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AccountData } from '..'

describe('AccountData', () => {
  setupTests()
  const getRadioInput = (name: RegExp) =>
    screen.getByRole('radio', {
      name
    })
  const emailInput = () =>
    screen.getByRole('textbox', {
      name: /seu email/i
    })

  beforeEach(() => {
    setUser()
  })

  it('renders correctly', async () => {
    await renderWithProviders(<AccountData />)
    const accountData = screen.getByTestId('account-data')

    expect(accountData).toBeInTheDocument()
  })

  it('submits the form', async () => {
    const refetchSpy = jest.spyOn(refetchInvoiceVar, 'refetch')
    await renderWithProviders(<AccountData />, {
      apolloMocks: [updateMeMock()]
    })

    await formUtils.submitForm()

    expect(refetchSpy).not.toHaveBeenCalled()
  })

  it('submits only email', async () => {
    const refetchSpy = jest.spyOn(refetchInvoiceVar, 'refetch')
    const setPopoverSpy = jest.spyOn(popoverVar, 'setPopover')
    await renderWithProviders(<AccountData />, {
      apolloMocks: [updateMeMock({ email: 'other@email.com' })]
    })

    fireEvent.change(emailInput(), { target: { value: 'other@email.com' } })
    await formUtils.submitForm()

    expect(setPopoverSpy).not.toHaveBeenCalled()
    expect(refetchSpy).not.toHaveBeenCalled()
  })

  it('submits only name', async () => {
    const refetchSpy = jest.spyOn(refetchInvoiceVar, 'refetch')
    const setPopoverSpy = jest.spyOn(popoverVar, 'setPopover')
    await renderWithProviders(<AccountData />, {
      apolloMocks: [updateMeMock({ name: 'other name' })]
    })
    const nameInput = screen.getByRole('textbox', {
      name: /seu nome/i
    })

    fireEvent.change(nameInput, { target: { value: 'other name' } })
    await formUtils.submitForm()

    expect(setPopoverSpy).toHaveBeenCalledWith(expect.anything(), 'success')
    expect(refetchSpy).toHaveBeenCalled()
  })

  it('does not submit currency if value is equal to user settings currency ', async () => {
    const refetchSpy = jest.spyOn(refetchInvoiceVar, 'refetch')
    const setPopoverSpy = jest.spyOn(popoverVar, 'setPopover')
    await renderWithProviders(<AccountData />, {
      apolloMocks: [updateMeMock({ currency: undefined }, 'UpdateMeNoChanges')]
    })

    fireEvent.click(getRadioInput(/dólar/i))
    fireEvent.click(getRadioInput(/real/i))
    await formUtils.submitForm()

    expect(setPopoverSpy).toHaveBeenCalledWith(expect.anything(), 'info')
    expect(refetchSpy).not.toHaveBeenCalled()
  })

  it('submits only currency as BRL', async () => {
    const refetchSpy = jest.spyOn(refetchInvoiceVar, 'refetch')
    const setPopoverSpy = jest.spyOn(popoverVar, 'setPopover')
    await renderWithProviders(<AccountData />, {
      apolloMocks: [updateMeMock({ currency: 'USD' })]
    })

    fireEvent.click(getRadioInput(/dólar/i))
    await formUtils.submitForm()

    expect(setPopoverSpy).toHaveBeenCalledWith(expect.anything(), 'success')
    expect(refetchSpy).toHaveBeenCalled()
  })

  it('submits only currency as USD', async () => {
    const refetchSpy = jest.spyOn(refetchInvoiceVar, 'refetch')
    const setPopoverSpy = jest.spyOn(popoverVar, 'setPopover')
    setUser({ currency: 'USD' })
    await renderWithProviders(<AccountData />, {
      apolloMocks: [getMeMock(), updateMeMock({ currency: 'BRL' })]
    })

    fireEvent.click(getRadioInput(/real/i))
    await formUtils.submitForm()

    expect(setPopoverSpy).toHaveBeenCalledWith(expect.anything(), 'success')
    expect(refetchSpy).toHaveBeenCalled()
  })

  it('checks the correct radio input', async () => {
    setUser({ currency: 'USD' })
    await renderWithProviders(<AccountData />, {
      apolloMocks: [getMeMock(), updateMeMock({ name: 'other name' })]
    })

    expect(getRadioInput(/real/i)).not.toBeChecked()
    expect(getRadioInput(/dólar/i)).toBeChecked()
  })

  it('updates the email through pin', async () => {
    const setPopoverSpy = jest.spyOn(popoverVar, 'setPopover')
    await renderWithProviders(<AccountData />, {
      apolloMocks: [
        updateMeMock({ email: 'other@email.com' }),
        updateEmailByPinMock(),
        sendEmailPinMock()
      ]
    })
    emailInput()
    const pinCodeInput = () => screen.getAllByTestId('pin-input')[0]

    fireEvent.change(emailInput(), { target: { value: 'other@email.com' } })
    await formUtils.submitForm()
    userEvent.paste(pinCodeInput(), mockVariables.pin)
    await waitFetch()

    expect(setPopoverSpy).toHaveBeenCalledWith(expect.anything(), 'success')
  })

  it('resends the email pin', async () => {
    await renderWithProviders(<AccountData />, {
      apolloMocks: [
        updateMeMock({ email: 'other@email.com' }),
        updateEmailByPinMock(),
        sendEmailPinMock()
      ]
    })
    emailInput()
    const resendButton = () => screen.getByText(/reenviar/i)
    const countdown = () => screen.getByText(/60 s/i)

    fireEvent.change(emailInput(), { target: { value: 'other@email.com' } })
    await formUtils.submitForm()
    userEvent.click(resendButton())
    await waitFetch()

    expect(countdown()).toBeInTheDocument()
  })
})
