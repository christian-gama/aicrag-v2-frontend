import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import advanceTimer from '@/tests/helpers/advanceTimer'
import OverlayRoot from '@/tests/helpers/overlayRoot'
import Popover from '../Popover'

const mockedFunction = jest.fn()
jest.mock(
  '../../../utils/icons/CheckCircleIcon',
  () =>
    function mockedComponent (props: any) {
      mockedFunction(props)

      return null
    }
)
jest.mock(
  '../../../utils/icons/ErrorIcon',
  () =>
    function mockedComponent (props: any) {
      mockedFunction(props)

      return null
    }
)
jest.mock(
  '../../../utils/icons/InfoCircleIcon',
  () =>
    function mockedComponent (props: any) {
      mockedFunction(props)

      return null
    }
)

describe('Popover', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    jest.useFakeTimers()
    overlayRoot.addOverlayRoot()
  })

  it('renders correctly', () => {
    render(<Popover isOpen message={[]} type="success" />)
    const popover = screen.getByTestId('popover')

    expect(popover).toBeInTheDocument()
  })

  it('renders the message from messages array', () => {
    const messages = ['message 1', 'message 2']
    render(<Popover isOpen message={messages} type="success" />)

    expect(screen.getByText(messages[0])).toBeInTheDocument()
    expect(screen.getByText(messages[1])).toBeInTheDocument()
  })

  it('renders the message without a list if message is a string', () => {
    const message = 'message'
    render(<Popover isOpen message={message} type="success" />)
    const popoverList = screen.queryByTestId('popover-list')
    const text = screen.getByText(message)

    expect(popoverList).not.toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })

  it('lasts the duration passed through props', async () => {
    const duration = 10
    render(<Popover isOpen message="" type="success" duration={duration} />)
    const popover = screen.getByTestId('popover')

    advanceTimer()

    expect(popover).not.toBeInTheDocument()
  })

  it('calls onClose when the time expires', async () => {
    const onClose = jest.fn()
    render(<Popover isOpen message="" type="success" onClose={onClose} />)

    advanceTimer()

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when click on close button', () => {
    const onClose = jest.fn()
    render(<Popover isOpen message="" type="success" onClose={onClose} />)
    const closeButton = screen.getByTestId('popover-close-wrapper')

    userEvent.click(closeButton)

    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes if click on close button', () => {
    render(<Popover isOpen message="" type="success" />)
    const closeButton = screen.getByTestId('popover-close-wrapper')
    const popover = screen.getByTestId('popover')

    userEvent.click(closeButton)

    expect(popover).not.toBeInTheDocument()
  })

  it('does not render if isOpen is false', () => {
    render(<Popover message="" type="success" />)
    const popover = screen.queryByTestId('popover')

    expect(popover).not.toBeInTheDocument()
  })

  it('calls CheckCircleIcon with correct props if type is success', () => {
    render(<Popover isOpen message="" type="success" />)

    expect(mockedFunction).toHaveBeenCalledWith({
      color: 'white',
      size: expect.anything()
    })
  })

  it('calls ErrorIcon with correct props if type is error', () => {
    render(<Popover isOpen message="" type="error" />)

    expect(mockedFunction).toHaveBeenCalledWith({
      color: 'white',
      size: expect.anything()
    })
  })

  it('calls InfoCircleIcon with correct props if type is info', () => {
    render(<Popover isOpen message="" type="info" />)

    expect(mockedFunction).toHaveBeenCalledWith({
      color: 'white',
      size: expect.anything()
    })
  })
})
