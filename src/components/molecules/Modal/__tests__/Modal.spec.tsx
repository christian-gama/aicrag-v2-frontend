import getElement from '@/tests/helpers/getElement'
import OverlayRoot from '@/tests/helpers/overlayRoot'
import { cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Modal from '..'

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
    const backdrop = getElement('modal')

    expect(backdrop).toBeInTheDocument()
  })

  it('keeps the modal on the screen if click on the modal', () => {
    render(<Modal isOpen />)
    const modal = getElement('modal')
    const backdrop = getElement('backdrop')

    userEvent.click(modal)

    expect(backdrop).toBeInTheDocument()
  })

  it('calls onDismiss when clicking on backdrop', () => {
    const onDismiss = jest.fn()
    render(<Modal isOpen onDismiss={onDismiss} />)
    const backdrop = getElement('backdrop')

    userEvent.click(backdrop)

    expect(onDismiss).toHaveBeenCalled()
  })
})
