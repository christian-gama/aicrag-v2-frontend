import { OverlayRoot, renderWithProviders } from '@/tests/helpers'
import { cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Help } from '..'

describe('Help', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('renders correctly', () => {
    renderWithProviders(<Help isOpen />)
    const help = screen.getByTestId('help')

    expect(help).toBeInTheDocument()
  })

  it('closes the Help modal when clicking on BackIcon', () => {
    renderWithProviders(<Help isOpen />)
    const closeIcon = screen.getByTestId('nav-header-back')
    const help = screen.queryByTestId('help')

    userEvent.click(closeIcon)

    expect(help).not.toBeInTheDocument()
  })
})
