import getElement from '@/tests/helpers/getElement'
import OverlayRoot from '@/tests/helpers/overlayRoot'
import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import Alert from '..'

describe('Alert', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('renders correctly', () => {
    render(<Alert isOpen title="" message="" type="info" mode="cancelOnly" />)
    const alert = getElement('alert')

    expect(alert).toBeInTheDocument()
  })

  it('renders an action button if mode is actionAndCancel', () => {
    render(
      <Alert
        mode="actionAndCancel"
        onAction={() => {}}
        actionName="action"
        type="info"
        message=""
        title=""
        isOpen
      />
    )
    const actionButton = screen.getByRole('button', { name: 'action' })

    expect(actionButton).toBeInTheDocument()
  })

  it('calls onAction when click on action button', () => {
    const onAction = jest.fn()
    render(
      <Alert
        mode="actionAndCancel"
        onAction={onAction}
        actionName="action"
        type="warning"
        message=""
        title=""
        isOpen
      />
    )
    const actionButton = screen.getByRole('button', { name: 'action' })

    actionButton.click()

    expect(onAction).toHaveBeenCalled()
  })

  it('calls onCancel when click on cancel button', () => {
    const onCancel = jest.fn()
    render(
      <Alert
        onCancel={onCancel}
        mode="cancelOnly"
        type="info"
        message=""
        title=""
        isOpen
      />
    )
    const cancelButton = screen.getByRole('button', { name: /voltar/gi })

    cancelButton.click()

    expect(onCancel).toHaveBeenCalled()
  })

  it('has a single button if mode is cancelOnly', () => {
    render(<Alert mode="cancelOnly" type="danger" message="" title="" isOpen />)
    const cancelButtons = screen.getAllByRole('button')

    expect(cancelButtons).toHaveLength(1)
  })
})
