import { OverlayRoot, renderWithProviders } from '@/tests/helpers'
import { cleanup, screen } from '@testing-library/react'
import { AccountDataView } from '..'

describe('AccountDataView', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    overlayRoot.removeOverlayRoot()
    cleanup()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('renders correctly', async () => {
    await renderWithProviders(<AccountDataView />)
    const accountDataView = screen.getByTestId('account-data-view')

    expect(accountDataView).toBeInTheDocument()
  })
})
