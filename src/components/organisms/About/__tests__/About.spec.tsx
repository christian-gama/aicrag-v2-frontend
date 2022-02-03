import { OverlayRoot, renderWithProviders } from '@/tests/helpers'
import { cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { About } from '..'

describe('About', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('renders correctly', () => {
    renderWithProviders(<About isOpen />)
    const about = screen.getByTestId('about')

    expect(about).toBeInTheDocument()
  })

  it('closes the about modal when clicking on BackIcon', () => {
    renderWithProviders(<About isOpen />)
    const closeIcon = screen.getByTestId('nav-header-back')
    const about = screen.queryByTestId('about')

    userEvent.click(closeIcon)

    expect(about).not.toBeInTheDocument()
  })
})
