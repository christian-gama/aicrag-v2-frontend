import { OverlayRoot } from '@/tests/helpers'
import { render, cleanup, screen } from '@testing-library/react'
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
    render(<Help isOpen />)
    const help = screen.getByTestId('help')

    expect(help).toBeInTheDocument()
  })

  it('closes the Help modal when clicking on CloseIcon', () => {
    render(<Help isOpen />)
    const closeIcon = screen.getByTestId('help-close')
    const help = screen.queryByTestId('help')

    userEvent.click(closeIcon)

    expect(help).not.toBeInTheDocument()
  })
})
