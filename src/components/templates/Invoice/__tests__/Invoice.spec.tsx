import { authVar } from '@/external/graphql/reactiveVars'
import { renderWithProviders, waitFetch } from '@/tests/helpers'
import { mockVariables } from '@/tests/mocks'
import { getAllInvoicesMock } from '@/tests/mocks/queries'
import { cleanup, screen } from '@testing-library/react'
import { Invoice } from '..'

describe('Invoice', () => {
  const setCurrency = (currency: 'BRL' | 'USD') =>
    authVar.setUser({
      personal: {
        email: mockVariables.email,
        id: mockVariables.uuid,
        name: mockVariables.name
      },
      settings: {
        currency
      }
    })

  afterEach(() => {
    cleanup()
    authVar.logout()
  })

  beforeEach(() => {
    setCurrency('BRL')
  })

  it('renders correctly', async () => {
    renderWithProviders(<Invoice />, { apolloMocks: [getAllInvoicesMock()] })
    await waitFetch()
    const invoice = screen.getByTestId('invoice')

    expect(invoice).toBeInTheDocument()
  })

  it('returns null if there is no data', async () => {
    renderWithProviders(<Invoice />, {
      apolloMocks: [getAllInvoicesMock(new Error())]
    })
    await waitFetch()
    const invoice = screen.queryByTestId('invoice')

    expect(invoice).not.toBeInTheDocument()
  })

  it('renders a table with the correct currency symbol', async () => {
    setCurrency('USD')
    renderWithProviders(<Invoice />, {
      apolloMocks: [getAllInvoicesMock()]
    })
    await waitFetch()
    const currency = screen.getAllByText(/^\$ 10$/i)[0]

    expect(currency).toBeInTheDocument()
  })
})
