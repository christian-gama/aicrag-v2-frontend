import { cleanup, render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import React from 'react'
import Popover from '../Popover'
import PopoverProps from '../Popover.model'

const makeSut = (props: PopoverProps) => {
  render(<Popover isOpen={props.isOpen ?? true} {...props} />)
}

describe('Popover', () => {
  afterEach(() => {
    cleanup()
  })

  beforeAll(() => {
    const container = document.createElement('div')
    container.setAttribute('id', 'overlay-root')
    document.body.appendChild(container)
  })

  it('should render PopoverMessageList if message is an array', () => {
    const messages = ['message 1', 'message 2']

    makeSut({ message: messages, type: 'success' })

    const popoverList = screen.queryByTestId('popover-list')

    expect(popoverList).toBeInTheDocument()
  })

  it('should render the message without a list if message is a string', () => {
    const message = 'message'

    makeSut({ message, type: 'success' })

    const popoverList = screen.queryByTestId('popover-list')
    const text = screen.getByText(message)

    expect(popoverList).not.toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })

  it('should last the duration passed through props', async () => {
    const duration = 0.1

    const onCloseSpy = jest.fn()
    makeSut({ message: 'message', type: 'info', duration, onClose: onCloseSpy })

    const popover = screen.getByTestId('popover')

    await waitForElementToBeRemoved(popover, { timeout: duration * 1250 })

    expect(popover).not.toBeInTheDocument()
    expect(onCloseSpy).toHaveBeenCalled()
  })

  it('should close Popover if click on close button', () => {
    const message = 'message'

    makeSut({ message, type: 'error' })

    const closeButton = screen.getByTestId('popover-close-wrapper')

    closeButton.click()

    const popover = screen.queryByTestId('popover')

    expect(popover).not.toBeInTheDocument()
  })

  it('should not render if isOpen is false', () => {
    makeSut({ isOpen: false, message: '', type: 'success' })

    const popover = screen.queryByTestId('popover')

    expect(popover).not.toBeInTheDocument()
  })
})
