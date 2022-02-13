import { authVar } from '@/external/graphql/reactiveVars'
import { renderWithProviders, setupTests, setUser } from '@/tests/helpers'
import { getAllInvoicesMock } from '@/tests/mocks/queries'
import { screen } from '@testing-library/react'
import { Invoice, InvoiceFilter } from '..'

const renderInvoice = () => {
  return (
    <>
      <InvoiceFilter />
      <Invoice />
    </>
  )
}

describe('Invoice', () => {
  setupTests()

  afterEach(() => {
    authVar.logout()
  })

  beforeEach(() => {
    setUser({ currency: 'BRL' })
  })

  it('renders correctly', async () => {
    await renderWithProviders(renderInvoice(), {
      apolloMocks: [getAllInvoicesMock()]
    })
    const invoice = screen.getByTestId('invoice')

    expect(invoice).toBeInTheDocument()
  })

  it('returns null if there is no data', async () => {
    await renderWithProviders(renderInvoice(), {
      apolloMocks: [getAllInvoicesMock(new Error())]
    })
    const invoice = screen.queryByTestId('invoice')

    expect(invoice).not.toBeInTheDocument()
  })

  it('renders a table with the correct currency symbol', async () => {
    setUser({ currency: 'USD' })
    await renderWithProviders(renderInvoice(), {
      apolloMocks: [getAllInvoicesMock()]
    })
    const currency = screen.getAllByText(/^\$ 10$/i)[0]

    expect(currency).toBeInTheDocument()
  })
})
