import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useWindowDimensions } from '@/components/_hooks'
import { setupTests } from '@/tests/helpers'
import { Alert } from '..'

const mockFunction = jest.fn()
jest.mock('../../../utils/icons', () => ({
  InfoCircleIcon: (props: any) => {
    mockFunction(props)

    return null
  }
}))

jest.mock('../../../_hooks/useWindowDimensions')
const useWindowDimensionsMock = useWindowDimensions as jest.Mock

describe('Alert', () => {
  setupTests()

  beforeEach(() => {
    useWindowDimensionsMock.mockReturnValue({ width: 1920, height: 1080 })
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

    expect(mockFunction).toHaveBeenCalledWith({
      color: 'info'
    })
  })

  it("calls InfoCircleIcon with color equal to info if alert's type is equal to info", () => {
    render(<Alert isOpen title="" message="" type="info" />)

    expect(mockFunction).toHaveBeenCalledWith({
      color: expect.stringContaining('info')
    })
  })

  it("calls InfoCircleIcon with color equal to danger if alert's type is equal to danger", () => {
    render(<Alert isOpen title="" message="" type="danger" />)

    expect(mockFunction).toHaveBeenCalledWith({
      color: expect.stringContaining('danger')
    })
  })

  it("calls InfoCircleIcon with color equal to warning if alert's type is equal to warning", () => {
    render(<Alert isOpen title="" message="" type="warning" />)

    expect(mockFunction).toHaveBeenCalledWith({
      color: expect.stringContaining('warning')
    })
  })

  it('renders Card with no border if width is lesser or equal to 520', () => {
    useWindowDimensionsMock.mockReturnValue({ width: 520, height: 1080 })
    render(<Alert isOpen title="" message="" type="info" />)
    const card = screen.getByTestId('card')

    expect(card.className).toMatch(/roundness_none/gi)
  })
})
