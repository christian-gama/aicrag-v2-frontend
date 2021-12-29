import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import Alert from '../Alert'

const makeSut = (config: React.ComponentProps<typeof Alert>) => {
  render(<Alert {...config} />)
}

describe('Alert', () => {
  beforeAll(() => {
    const container = document.createElement('div')
    container.setAttribute('id', 'overlay-root')
    document.body.appendChild(container)
  })

  afterEach(() => {
    cleanup()
  })

  it('should render', () => {
    makeSut({
      message: 'message',
      title: 'title',
      type: 'danger',
      isOpen: true,
      mode: 'cancelOnly'
    })

    const alert = screen.getByTestId('alert')

    expect(alert).toBeInTheDocument()
  })

  it('should call onAction when clicking on onAction', () => {
    const onAction = jest.fn()

    makeSut({
      actionName: 'action',
      isOpen: true,
      message: 'message',
      mode: 'actionAndCancel',
      title: 'title',
      type: 'danger',
      onAction
    })

    const actionButton = screen.getByTestId('alert-action-button')

    actionButton.click()

    expect(onAction).toHaveBeenCalled()
  })

  it('should call onCancel when clicking on cancel button', () => {
    const onCancel = jest.fn()

    makeSut({
      actionName: 'action',
      isOpen: true,
      message: 'message',
      mode: 'actionAndCancel',
      onAction: jest.fn(),
      title: 'title',
      type: 'danger',
      onCancel
    })

    const cancelButton = screen.getByTestId('alert-cancel-button')

    cancelButton.click()

    expect(onCancel).toHaveBeenCalled()
  })

  it('should not call onCancel when clicking on onCancel', () => {
    const onCancel = jest.fn()

    makeSut({
      message: 'message',
      title: 'title',
      type: 'danger',
      isOpen: true,
      mode: 'cancelOnly'
    })

    const cancelButton = screen.getByTestId('alert-cancel-button')

    cancelButton.click()

    expect(onCancel).not.toHaveBeenCalled()
  })

  it('should change the action button to the name passed through props', () => {
    const onAction = jest.fn()

    makeSut({
      actionName: 'action',
      isOpen: true,
      message: 'message',
      mode: 'actionAndCancel',
      title: 'title',
      type: 'danger',
      onAction
    })

    const actionButton = screen.getByTestId('alert-action-button')

    expect(actionButton.textContent).toBe('action')
  })
})
