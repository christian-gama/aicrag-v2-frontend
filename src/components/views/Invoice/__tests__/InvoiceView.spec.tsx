import { renderWithProviders, setupTests } from '@/tests/helpers'
import { screen } from '@testing-library/react'
import { InvoiceView } from '..'

describe('InvoiceView', () => {
  setupTests()

  it('renders correctly', async () => {
    await renderWithProviders(<InvoiceView />)
    const invoiceView = screen.getByTestId('invoice-view')

    expect(invoiceView).toBeInTheDocument()
  })
})
