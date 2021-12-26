import render from '@/../tests/config/renderWithProvider'
import modalStoreMock from '@/../tests/mocks/modalStore.mock'
import { cleanup, screen } from '@testing-library/react'
import React from 'react'
import Modal from '../Modal'

const makeSut = (isOpen?: boolean): void => {
  const preloadedState = isOpen !== undefined && { preloadedState: { modal: { isOpen } } }

  render(<Modal />, { ...modalStoreMock, ...preloadedState })
}

describe('Modal', () => {
  beforeAll(() => {
    const container = document.createElement('div')
    container.setAttribute('id', 'overlay-root')
    document.body.appendChild(container)
  })

  afterEach(() => {
    cleanup()
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
    makeSut(false)

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

  it('should return null if overlay-root does not exist', () => {
    const container = document.getElementById('overlay-root')
    container.remove()

    const modal = render(<Modal />, { ...modalStoreMock })

    expect(modal.container.firstChild).toBeNull()
  })
})
