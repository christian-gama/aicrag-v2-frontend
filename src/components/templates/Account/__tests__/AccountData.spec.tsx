import { refetchInvoiceVar } from '@/external/graphql/reactiveVars'
import {
  formUtils,
  renderWithProviders,
  setupTests,
  setUser
} from '@/tests/helpers'
import { getMeMock, updateMeMock } from '@/tests/mocks/queries'
import { fireEvent, screen } from '@testing-library/react'
import { AccountData } from '..'

describe('AccountData', () => {
  setupTests()

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

    expect(refetchSpy).toHaveBeenCalled()
  })

  it('submits only email', async () => {
    const refetchSpy = jest.spyOn(refetchInvoiceVar, 'refetch')
    await renderWithProviders(<AccountData />, {
      apolloMocks: [updateMeMock({ email: 'other@email.com' })]
    })
    const emailInput = screen.getByRole('textbox', {
      name: /seu email/i
    })

    fireEvent.change(emailInput, { target: { value: 'other@email.com' } })
    await formUtils.submitForm()

    expect(refetchSpy).toHaveBeenCalled()
  })

  it('submits only name', async () => {
    const refetchSpy = jest.spyOn(refetchInvoiceVar, 'refetch')
    await renderWithProviders(<AccountData />, {
      apolloMocks: [updateMeMock({ name: 'other name' })]
    })
    const nameInput = screen.getByRole('textbox', {
      name: /seu nome/i
    })

    fireEvent.change(nameInput, { target: { value: 'other name' } })
    await formUtils.submitForm()

    expect(refetchSpy).toHaveBeenCalled()
  })

  it('does not submit currency if value is equal to user settings currency ', async () => {
    const refetchSpy = jest.spyOn(refetchInvoiceVar, 'refetch')
    await renderWithProviders(<AccountData />, {
      apolloMocks: [updateMeMock({ currency: undefined }, 'UpdateMeNoChanges')]
    })
    const realRadioInput = screen.getByRole('radio', {
      name: /real/i
    })
    const usdRadioInput = screen.getByRole('radio', {
      name: /dólar/i
    })

    fireEvent.click(usdRadioInput)
    fireEvent.click(realRadioInput)
    await formUtils.submitForm()

    expect(refetchSpy).toHaveBeenCalled()
  })

  it('submits only currency as BRL', async () => {
    const refetchSpy = jest.spyOn(refetchInvoiceVar, 'refetch')
    await renderWithProviders(<AccountData />, {
      apolloMocks: [updateMeMock({ currency: 'USD' })]
    })
    const usdRadioInput = screen.getByRole('radio', {
      name: /dólar/i
    })

    fireEvent.click(usdRadioInput)
    await formUtils.submitForm()

    expect(refetchSpy).toHaveBeenCalled()
  })

  it('submits only currency as USD', async () => {
    setUser({ currency: 'USD' })
    const refetchSpy = jest.spyOn(refetchInvoiceVar, 'refetch')
    await renderWithProviders(<AccountData />, {
      apolloMocks: [getMeMock(), updateMeMock({ currency: 'BRL' })]
    })
    const realRadioInput = screen.getByRole('radio', {
      name: /real/i
    })

    fireEvent.click(realRadioInput)
    await formUtils.submitForm()

    expect(refetchSpy).toHaveBeenCalled()
  })

  it('checks the correct radio input', async () => {
    setUser({ currency: 'USD' })
    await renderWithProviders(<AccountData />, {
      apolloMocks: [getMeMock(), updateMeMock({ name: 'other name' })]
    })
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
