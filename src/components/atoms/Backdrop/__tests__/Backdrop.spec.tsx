import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import Backdrop from '../Backdrop'
import BackdropProps from '../protocols/Backdrop.model'

const makeSut = (props: BackdropProps) => {
  return render(<Backdrop {...props} />)
}

describe('Backdrop', () => {
  afterEach(() => {
    cleanup()
  })

  beforeEach(() => {
    const container = document.createElement('div')
    container.setAttribute('id', 'overlay-root')
    document.body.appendChild(container)
  })

  it('should render Backdrop correctly', () => {
    makeSut({ isOpen: true })

    const backdrop = screen.getByTestId('backdrop')

    expect(backdrop).toBeInTheDocument()
  })

  it('should dismiss the backdrop when press "Escape"', () => {
    makeSut({ isOpen: true })

    const backdrop = screen.queryByTestId('backdrop')
    const event = new KeyboardEvent('keydown', { key: 'Escape' })
    document.dispatchEvent(event)

    expect(backdrop).not.toBeInTheDocument()
  })

  it('should dismiss the backdrop when click on it', () => {
    makeSut({ isOpen: true })

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
    makeSut({ isOpen: true })

    const backdrop = screen.queryByTestId('backdrop')
    const event = new KeyboardEvent('keydown', { key: 'Enter' })
    document.dispatchEvent(event)

    expect(backdrop).toBeInTheDocument()
  })
})
