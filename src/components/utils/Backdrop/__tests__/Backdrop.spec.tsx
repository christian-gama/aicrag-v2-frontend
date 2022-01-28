import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import OverlayRoot from '@/tests/helpers/overlayRoot'
import Backdrop from '..'

describe('Backdrop', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('renders correctly', () => {
    render(<Backdrop isOpen />)
    const backdrop = screen.getByTestId('backdrop')

    expect(backdrop).toBeInTheDocument()
  })

  it('dismiss if click on backdrop', () => {
    render(<Backdrop isOpen />)
    const backdrop = screen.getByTestId('backdrop')

    userEvent.click(backdrop)

    expect(backdrop).not.toBeInTheDocument()
  })

  it('dismiss and calls onDismiss if it is passed through props', () => {
    const onDismiss = jest.fn()
    render(<Backdrop isOpen onDismiss={onDismiss} />)
    const backdrop = screen.getByTestId('backdrop')

    userEvent.click(backdrop)
  })

  it("do not dismiss if click in backdrop's children", () => {
    render(
      <Backdrop isOpen>
        <div data-testid="child">Child</div>
      </Backdrop>
    )
    const backdrop = screen.getByTestId('backdrop')
    const child = screen.getByTestId('child')

    userEvent.click(child)

    expect(backdrop).toBeInTheDocument()
  })

  it('dismiss if press Escape key', () => {
    render(<Backdrop isOpen />)
    const backdrop = screen.getByTestId('backdrop')

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(backdrop).not.toBeInTheDocument()
  })

  it('dismiss if press Escape key and calls onDismiss if it is passed through props', () => {
    const onDismiss = jest.fn()
    render(<Backdrop isOpen onDismiss={onDismiss} />)

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(onDismiss).toHaveBeenCalled()
  })

  it('do not dismiss if press a key different of Escape', () => {
    render(<Backdrop isOpen />)
    const backdrop = screen.getByTestId('backdrop')

    fireEvent.keyDown(document, { key: 'a' })

    expect(backdrop).toBeInTheDocument()
  })
})
