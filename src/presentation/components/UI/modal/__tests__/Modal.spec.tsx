import render from '@/../tests/config/renderWithProvider'
import modalStoreMock from '@/../tests/mocks/modalStore.mock'
import Maybe from '@/utils/typescript/maybe.model'
import { cleanup, screen } from '@testing-library/react'
import React from 'react'
import Modal from '../Modal'

const makeSut = (config?: { isOpen?: boolean, onDismiss?: VoidFunction }): void => {
  const preloadedState = config?.isOpen !== undefined && { preloadedState: { modal: { isOpen: config.isOpen } } }

  render(<Modal onDismiss={config?.onDismiss} />, { ...modalStoreMock, ...preloadedState })
}

describe('Modal', () => {
  const overlay = (): Maybe<HTMLElement> => document.getElementById('overlay-root')

  beforeEach(() => {
    const container = document.createElement('div')
    container.setAttribute('id', 'overlay-root')
    document.body.appendChild(container)
  })

  afterEach(() => {
    cleanup()
    overlay()?.remove()
  })

  it('should render the backdrop', () => {
    makeSut()

    const backdrop = screen.getByTestId('backdrop')

    expect(backdrop).toBeInTheDocument()
  })

  it('should dismiss modal when press escape', () => {
    makeSut()

    const event = new KeyboardEvent('keydown', { key: 'Escape' })
    document.dispatchEvent(event)
    const backdrop = screen.queryByTestId('backdrop')

    expect(backdrop).toBeInTheDocument()
  })

  it('should dismiss modal when click on backdrop', () => {
    makeSut()

    const backdrop = screen.getByTestId('backdrop')
    backdrop.dispatchEvent(new MouseEvent('click', { bubbles: true }))

    expect(backdrop).toBeInTheDocument()
  })

  it('should not render the backdrop when isOpen is false', () => {
    makeSut({ isOpen: false })

    const modal = screen.queryByTestId('backdrop')

    expect(modal).not.toBeInTheDocument()
  })

  it('should keep the modal on the screen if press any other key but escape', () => {
    makeSut()

    const backdrop = screen.queryByTestId('backdrop')
    const event = new KeyboardEvent('keydown', { key: 'Enter' })
    document.dispatchEvent(event)

    expect(backdrop).toBeInTheDocument()
  })

  it('should keep the modal on the screen if click on the modal', () => {
    makeSut()

    const backdrop = screen.queryByTestId('backdrop')
    const modal = screen.getByTestId('modal')
    modal.dispatchEvent(new MouseEvent('click', { bubbles: true }))

    expect(backdrop).toBeInTheDocument()
  })

  it('should execute onDismiss in onClick event if passed through props', () => {
    const onDismiss = jest.fn()
    makeSut({ onDismiss })

    const backdrop = screen.getByTestId('backdrop')
    backdrop.dispatchEvent(new MouseEvent('click', { bubbles: true }))

    expect(onDismiss).toHaveBeenCalledTimes(1)
  })

  it('should execute onDismiss when pressing escape if passed through props', () => {
    const onDismiss = jest.fn()
    makeSut({ onDismiss })

    const event = new KeyboardEvent('keydown', { key: 'Escape' })
    document.dispatchEvent(event)

    expect(onDismiss).toHaveBeenCalledTimes(1)
  })

  it('should return null if overlay-root does not exist', () => {
    overlay()?.remove()

    const modal = render(<Modal />, { ...modalStoreMock })

    expect(modal.container.firstChild).toBeNull()
  })
})
