import OverlayRoot from '@/tests/helpers/overlayRoot'
import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import Modal from '..'

const makeSut = (config?: { isOpen?: boolean, onDismiss?: VoidFunction }): void => {
  if (config?.isOpen === undefined) {
    config = { ...config, isOpen: true }
  }

  render(<Modal {...config} />)
}

describe('Modal', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('should render correctly', () => {
    makeSut()

    const backdrop = screen.getByTestId('modal')

    expect(backdrop).toBeInTheDocument()
  })

  it('should keep the modal on the screen if click on the modal', () => {
    makeSut()

    const modal = screen.getByTestId('modal')
    modal.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    const backdrop = screen.queryByTestId('backdrop')

    expect(backdrop).toBeInTheDocument()
  })
})
