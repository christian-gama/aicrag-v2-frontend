import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import Maybe from '@/application/utils/typescript/maybe.model'
import Modal from '..'

const makeSut = (config?: { isOpen?: boolean, onDismiss?: VoidFunction }): void => {
  if (config?.isOpen === undefined) {
    config = { ...config, isOpen: true }
  }

  render(<Modal {...config} />)
}

describe('Modal', () => {
  const overlay = (): Maybe<HTMLElement> => document.getElementById('overlay-root') as HTMLElement

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

  it('should dismiss modal when press "Escape"', () => {
    makeSut()

    const backdrop = screen.queryByTestId('backdrop')
    const event = new KeyboardEvent('keydown', { key: 'Escape' })
    document.dispatchEvent(event)

    expect(backdrop).not.toBeInTheDocument()
  })

  it('should dismiss modal when click on backdrop', () => {
    makeSut()

    const backdrop = screen.getByTestId('backdrop')
    backdrop.dispatchEvent(new MouseEvent('click', { bubbles: true }))

    expect(backdrop).not.toBeInTheDocument()
  })

  it('should not render the backdrop when isOpen is false', () => {
    makeSut({ isOpen: false })

    const modal = screen.queryByTestId('backdrop')

    expect(modal).not.toBeInTheDocument()
  })

  it('should keep the modal on the screen if press any other key but "Escape"', () => {
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
})
