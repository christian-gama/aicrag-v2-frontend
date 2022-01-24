import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import React, { ComponentPropsWithRef } from 'react'
import OverlayRoot from '@/tests/helpers/overlayRoot'
import Backdrop from '../Backdrop'

const makeSut = (props: ComponentPropsWithRef<typeof Backdrop>) => {
  return render(<Backdrop {...props} />)
}

describe('Backdrop', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('should render Backdrop correctly', () => {
    makeSut({ isOpen: true })

    const backdrop = screen.getByTestId('backdrop')

    expect(backdrop).toBeInTheDocument()
  })

  it('should dismiss the backdrop when press "Escape"', () => {
    makeSut({ isOpen: true })

    const backdrop = screen.queryByTestId('backdrop')
    fireEvent.keyDown(document, { key: 'Escape' })

    expect(backdrop).not.toBeInTheDocument()
  })

  it('should dismiss the backdrop when click on it', () => {
    makeSut({ isOpen: true })

    const backdrop = screen.getByTestId('backdrop')
    fireEvent.click(backdrop)

    expect(backdrop).not.toBeInTheDocument()
  })

  it('should not render the backdrop when isOpen is false', () => {
    makeSut({ isOpen: false })

    const modal = screen.queryByTestId('backdrop')

    expect(modal).not.toBeInTheDocument()
  })

  it('should keep the modal on the screen if press any other key but "Escape"', () => {
    makeSut({ isOpen: true })

    const backdrop = screen.queryByTestId('backdrop')
    fireEvent.keyDown(document, { key: 'Enter' })

    expect(backdrop).toBeInTheDocument()
  })

  it('should call onDismiss when pressing "Escape"', () => {
    const onDismiss = jest.fn()
    makeSut({ isOpen: true, onDismiss })

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(onDismiss).toHaveBeenCalled()
  })

  it('should call onDismiss when pressing clicking on backdrop', () => {
    const onDismiss = jest.fn()
    makeSut({ isOpen: true, onDismiss })

    const backdrop = screen.getByTestId('backdrop')
    fireEvent.click(backdrop)

    expect(onDismiss).toHaveBeenCalled()
  })
})
