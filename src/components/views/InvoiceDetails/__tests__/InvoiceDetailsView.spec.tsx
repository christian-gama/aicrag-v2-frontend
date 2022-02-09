import { renderWithProviders, setupTests } from '@/tests/helpers'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { InvoiceDetailsView } from '..'

const mockFunction = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockFunction
}))

describe('InvoiceDetailsView', () => {
  setupTests()

  it('renders correctly', async () => {
    await renderWithProviders(<InvoiceDetailsView />)
    const invoiceDetailsView = screen.getByTestId('invoice-details-view')

    expect(invoiceDetailsView).toBeInTheDocument()
  })

  it('should navigate back to invoice page when clicking on backIcon', async () => {
    await renderWithProviders(<InvoiceDetailsView />)
    const backIcon = screen.getByTestId('back-icon')

    userEvent.click(backIcon)

    expect(mockFunction).toHaveBeenCalled()
  })
})
