import { OverlayRoot, renderWithProviders } from '@/tests/helpers'
import { cleanup, screen } from '@testing-library/react'
import { InvoiceDetailsView } from '..'

describe('InvoiceDetailsView', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('renders correctly', () => {
    renderWithProviders(<InvoiceDetailsView />)
    const invoiceDetailsView = screen.getByTestId('invoice-details-view')

    expect(invoiceDetailsView).toBeInTheDocument()
  })
})
