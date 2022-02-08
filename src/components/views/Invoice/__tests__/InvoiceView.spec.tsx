import { OverlayRoot, renderWithProviders } from '@/tests/helpers'
import { cleanup, screen } from '@testing-library/react'
import { InvoiceView } from '..'

describe('InvoiceView', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    overlayRoot.removeOverlayRoot()
    cleanup()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('renders correctly', () => {
    renderWithProviders(<InvoiceView />)
    const invoiceView = screen.getByTestId('invoice-view')

    expect(invoiceView).toBeInTheDocument()
  })
})
