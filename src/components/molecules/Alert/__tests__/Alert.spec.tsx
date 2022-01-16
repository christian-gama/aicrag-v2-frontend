import { cleanup, render, screen } from '@testing-library/react'
import React, { ComponentPropsWithRef } from 'react'
import Alert from '..'

const makeSut = (config: ComponentPropsWithRef<typeof Alert>) => {
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

  it('should render both cancel and action buttons if mode is equal to "actionAndCancel"', () => {
    makeSut({
      actionName: 'action',
      isOpen: true,
      message: 'message',
      mode: 'actionAndCancel',
      onAction: jest.fn(),
      title: 'title',
      type: 'danger'
    })

    expect(screen.getByTestId('alert-action-button')).toBeTruthy()
    expect(screen.getByTestId('alert-cancel-button')).toBeTruthy()
  })

  it('should render only cancel button if mode is equal to "cancelOnly"', () => {
    makeSut({
      isOpen: true,
      message: 'message',
      mode: 'cancelOnly',
      title: 'title',
      type: 'info'
    })

    expect(screen.getByTestId('alert-cancel-button')).toBeTruthy()
    expect(screen.queryByTestId('alert-action-button')).toBeNull()
  })

  it('should dismiss the alert if click on action button', () => {
    const onAction = jest.fn()
    makeSut({
      actionName: 'action',
      isOpen: true,
      message: 'message',
      mode: 'actionAndCancel',
      onAction,
      title: 'title',
      type: 'danger'
    })

    const actionButton = screen.getByTestId('alert-action-button')
    actionButton.click()

    const alert = screen.getByTestId('alert')

    setTimeout(() => {
      expect(alert).toBeNull()
    })
  })

  it('should dismiss the alert if click on cancel button', () => {
    makeSut({
      isOpen: true,
      message: 'message',
      mode: 'cancelOnly',
      title: 'title',
      type: 'warning'
    })

    const cancelButton = screen.getByTestId('alert-cancel-button')
    cancelButton.click()

    const alert = screen.getByTestId('alert')

    setTimeout(() => {
      expect(alert).toBeNull()
    })
  })

  it('should call onCancel when clicking on cancel button if it is defined', () => {
    const onCancel = jest.fn()
    makeSut({
      isOpen: true,
      message: 'message',
      mode: 'cancelOnly',
      onCancel,
      title: 'title',
      type: 'warning'
    })

    const cancelButton = screen.getByTestId('alert-cancel-button')
    cancelButton.click()

    expect(onCancel).toHaveBeenCalledTimes(1)
  })
})
