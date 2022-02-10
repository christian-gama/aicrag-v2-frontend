import { authVar } from '@/external/graphql/reactiveVars'
import { renderWithProviders, setupTests, setUser } from '@/tests/helpers'
import { getAllInvoicesMock } from '@/tests/mocks/queries'
import { screen } from '@testing-library/react'
import { Invoice } from '..'

describe('Invoice', () => {
  setupTests()

  afterEach(() => {
    authVar.logout()
  })

  beforeEach(() => {
    setUser({ currency: 'BRL' })
  })

  it('renders correctly', async () => {
    await renderWithProviders(<Invoice />, {
      apolloMocks: [getAllInvoicesMock()]
    })
    const invoice = screen.getByTestId('invoice')

    expect(invoice).toBeInTheDocument()
  })

  it('returns null if there is no data', async () => {
    await renderWithProviders(<Invoice />, {
      apolloMocks: [getAllInvoicesMock(new Error())]
    })
    const invoice = screen.queryByTestId('invoice')

    expect(invoice).not.toBeInTheDocument()
  })

  it('renders a table with the correct currency symbol', async () => {
    setUser({ currency: 'USD' })
    await renderWithProviders(<Invoice />, {
      apolloMocks: [getAllInvoicesMock()]
    })
    const currency = screen.getAllByText(/^\$ 10$/i)[0]

    expect(currency).toBeInTheDocument()
  })
})
