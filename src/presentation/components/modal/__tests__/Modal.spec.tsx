import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import Modal from '../Modal'

const makeSut = (isOpen: boolean, toggleModal: () => void): void => {
  const _isOpen = isOpen

  render(<Modal toggleModal={toggleModal} isOpen={_isOpen} />)
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
    makeSut(true, () => {})

    const backdrop = screen.getByTestId('modal')

    expect(backdrop).toBeInTheDocument()
  })

  it('should dismiss modal when press escape', () => {
    const toggleModal = jest.fn()
    makeSut(true, toggleModal)

    const event = new KeyboardEvent('keydown', { key: 'Escape' })
    document.dispatchEvent(event)

    expect(toggleModal).toHaveBeenCalled()
  })

  it('should dismiss modal when click backdrop', () => {
    const toggleModal = jest.fn()
    makeSut(true, toggleModal)

    const backdrop = screen.getByTestId('modal')
    backdrop.dispatchEvent(new MouseEvent('click', { bubbles: true }))

    expect(toggleModal).toHaveBeenCalled()
  })

  it('should not render the backdrop when isOpen is false', () => {
    makeSut(false, () => {})

    const modal = screen.queryByTestId('modal')

    expect(modal).not.toBeInTheDocument()
  })
})
