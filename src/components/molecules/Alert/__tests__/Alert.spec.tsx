import OverlayRoot from '@/tests/helpers/overlayRoot'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Alert from '..'

const mockedFunction = jest.fn()
jest.mock(
  '../../../atoms/icons/InfoCircleIcon',
  () =>
    function mockedComponent (props: any) {
      mockedFunction(props)

      return null
    }
)

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
    render(<Alert isOpen title="" message="" type="info" />)
    const alert = screen.getByTestId('alert')

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
        type="info"
        message=""
        title=""
        isOpen
      />
    )
    const actionButton = screen.getByRole('button', { name: 'action' })

    userEvent.click(actionButton)

    expect(onAction).toHaveBeenCalled()
  })

  it('closes if click on cancel button', () => {
    render(<Alert type="info" message="" title="" isOpen />)
    const cancelButton = screen.getByRole('button', { name: /voltar/gi })
    const alert = screen.getByTestId('alert')

    userEvent.click(cancelButton)

    expect(alert).not.toBeInTheDocument()
  })

  it('calls onCancel when click on cancel button', () => {
    const onCancel = jest.fn()
    render(<Alert onCancel={onCancel} type="info" message="" title="" isOpen />)
    const cancelButton = screen.getByRole('button', { name: /voltar/gi })

    cancelButton.click()

    expect(onCancel).toHaveBeenCalled()
  })

  it('has a single button if mode is cancelOnly', () => {
    render(<Alert mode="cancelOnly" type="info" message="" title="" isOpen />)
    const cancelButtons = screen.getAllByRole('button')

    expect(cancelButtons).toHaveLength(1)
  })

  it('calls InfoCircleIcon with correct color', () => {
    render(<Alert isOpen title="" message="" type="info" />)

    expect(mockedFunction).toHaveBeenCalledWith({
      color: 'info'
    })
  })

  it("calls InfoCircleIcon with color equal to info if alert's type is equal to info", () => {
    render(<Alert isOpen title="" message="" type="info" />)

    expect(mockedFunction).toHaveBeenCalledWith({
      color: expect.stringContaining('info')
    })
  })

  it("calls InfoCircleIcon with color equal to danger if alert's type is equal to danger", () => {
    render(<Alert isOpen title="" message="" type="danger" />)

    expect(mockedFunction).toHaveBeenCalledWith({
      color: expect.stringContaining('danger')
    })
  })

  it("calls InfoCircleIcon with color equal to warning if alert's type is equal to warning", () => {
    render(<Alert isOpen title="" message="" type="warning" />)

    expect(mockedFunction).toHaveBeenCalledWith({
      color: expect.stringContaining('warning')
    })
  })
})
