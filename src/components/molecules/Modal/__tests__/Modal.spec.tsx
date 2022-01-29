import { render, cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Modal } from '..'
import { OverlayRoot } from '@/tests/helpers'

describe('Modal', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('renders correctly', () => {
    render(<Modal isOpen />)
    const backdrop = screen.getByTestId('modal')

    expect(backdrop).toBeInTheDocument()
  })

  it('keeps the modal on the screen if click on the modal', () => {
    render(<Modal isOpen />)
    const modal = screen.getByTestId('modal')
    const backdrop = screen.getByTestId('backdrop')

    userEvent.click(modal)

    expect(backdrop).toBeInTheDocument()
  })

  it('calls onDismiss when clicking on backdrop', () => {
    const onDismiss = jest.fn()
    render(<Modal isOpen onDismiss={onDismiss} />)
    const backdrop = screen.getByTestId('backdrop')

    userEvent.click(backdrop)

    expect(onDismiss).toHaveBeenCalled()
  })
})
