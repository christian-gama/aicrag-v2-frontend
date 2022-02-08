import { makeAccessTokenStorage } from '@/external/factories/storage/auth'
import { renderWithProviders, waitFetch } from '@/tests/helpers'
import { mockVariables } from '@/tests/mocks'
import { getAllInvoicesMock } from '@/tests/mocks/queries'
import { cleanup, screen } from '@testing-library/react'
import jwtDecode from 'jwt-decode'
import { Invoice } from '..'

jest.mock('jwt-decode')
const jwtDecodeMock = jwtDecode as jest.Mock

describe('Invoice', () => {
  afterEach(() => {
    cleanup()
  })

  beforeEach(() => {
    jwtDecodeMock.mockReturnValue({ currency: 'BRL' })
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
    makeAccessTokenStorage().set(mockVariables.token)
    jwtDecodeMock.mockImplementation(() => ({ currency: 'BRL' }))

    renderWithProviders(<Invoice />, {
      apolloMocks: [getAllInvoicesMock()]
    })
    await waitFetch()
    const currency = screen.getAllByText(/^R\$ 50$/i)[0]

    expect(currency).toBeInTheDocument()
  })
})
