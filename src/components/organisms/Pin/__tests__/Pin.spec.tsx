import { render, cleanup, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pin } from '..'
import { useWindowDimensions } from '@/components/_hooks'

const mockLink = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: (props: any) => {
    mockLink(props)

    return <>BackIcon</>
  }
}))

const mockFunction = jest.fn()
jest.mock('../../../atoms/Steps', () => ({
  Steps: (props: any) => {
    mockFunction(props)

    return <>Steps</>
  }
}))

jest.mock('../../../_hooks/useWindowDimensions')
const mockUseWindowDimensions = useWindowDimensions as jest.Mock

describe('Pin', () => {
  afterEach(() => {
    cleanup()
    mockUseWindowDimensions.mockReset()
  })

  beforeEach(() => {
    mockUseWindowDimensions.mockReturnValue({ width: 1920, height: 1080 })
  })

  it('renders correctly', () => {
    render(<Pin isPage to="/" />)
    const pin = screen.getByTestId('pin')

    expect(pin).toBeInTheDocument()
  })

  it('redirects to the correct page when clicking on Link', () => {
    render(<Pin isPage to="/" />)
    const link = screen.getByText(/backicon/i)

    userEvent.click(link)

    expect(mockLink).toHaveBeenCalledWith({
      children: expect.anything(),
      'aria-label': expect.anything(),
      to: '/'
    })
  })

  it('does not render if isOpen is false', () => {
    render(<Pin isPage={false} isOpen={false} />)
    const pin = screen.queryByTestId('pin')

    expect(pin).not.toBeInTheDocument()
  })

  it('closes when clicks on Link if it is not a page', () => {
    render(<Pin isPage={false} isOpen />)
    const back = screen.getByTestId('pin-back')

    userEvent.click(back)

    expect(screen.queryByTestId('pin')).not.toBeInTheDocument()
  })

  it('calls Steps with responsive props', () => {
    mockUseWindowDimensions.mockReturnValue({ width: 520, height: 599 })
    render(<Pin isPage={false} isOpen />)

    expect(mockFunction).toHaveBeenCalledWith({
      direction: 'row',
      gap: '14rem',
      steps: expect.anything()
    })
  })

  it('accepts only 1 character per input', () => {
    render(<Pin isPage={false} isOpen />)
    const [input] = screen.getAllByTestId('pin-input')

    userEvent.paste(input, '12345')

    expect(input).toHaveValue('1')
  })

  it('fills all inputs when paste the pin code in an input', () => {
    render(<Pin isPage={false} isOpen />)
    const inputs = screen.getAllByTestId('pin-input')

    userEvent.paste(inputs[0], '12345')

    expect(inputs[0]).toHaveValue('1')
    expect(inputs[1]).toHaveValue('2')
    expect(inputs[2]).toHaveValue('3')
    expect(inputs[3]).toHaveValue('4')
    expect(inputs[4]).toHaveValue('5')
  })

  it('does not paste if value length is lesser than 5', () => {
    render(<Pin isPage={false} isOpen />)
    const inputs = screen.getAllByTestId('pin-input')

    userEvent.paste(inputs[0], '123')

    expect(inputs[0]).toHaveValue('')
    expect(inputs[1]).toHaveValue('')
    expect(inputs[2]).toHaveValue('')
    expect(inputs[3]).toHaveValue('')
    expect(inputs[4]).toHaveValue('')
  })

  it('focus in the next input when press ArrowRight or Delete', () => {
    render(<Pin isPage={false} isOpen />)
    const inputs = screen.getAllByTestId('pin-input')

    fireEvent.keyDown(inputs[0], { key: 'ArrowRight' })
    fireEvent.keyDown(inputs[1], { key: 'Delete' })

    expect(inputs[2]).toHaveFocus()
  })

  it('does not focus in the next input if index is equal to 4', () => {
    render(<Pin isPage={false} isOpen />)
    const inputs = screen.getAllByTestId('pin-input')

    userEvent.type(inputs[4], '1')

    expect(inputs[4]).toHaveFocus()
  })

  it('focus in the previous input when press ArrowLeft or Backspace', () => {
    render(<Pin isPage={false} isOpen />)
    const inputs = screen.getAllByTestId('pin-input')

    fireEvent.keyDown(inputs[2], { key: 'ArrowLeft' })
    fireEvent.keyDown(inputs[1], { key: 'Backspace' })

    expect(inputs[0]).toHaveFocus()
  })

  it('does not focus in the previous input if index is equal to 0', () => {
    render(<Pin isPage={false} isOpen />)
    const inputs = screen.getAllByTestId('pin-input')

    fireEvent.keyDown(inputs[0], { key: 'ArrowLeft' })

    expect(inputs[0]).toHaveFocus()
  })

  it('deletes the input value when press Backspace', () => {
    render(<Pin isPage={false} isOpen />)
    const inputs = screen.getAllByTestId('pin-input')

    userEvent.type(inputs[1], '1')
    userEvent.type(inputs[1], '{backspace}')

    expect(inputs[1]).toHaveValue('')
    expect(inputs[1]).toHaveFocus()
  })

  it('focus and delete the previous input value if press Backspace in an empty input', () => {
    render(<Pin isPage={false} isOpen />)
    const inputs = screen.getAllByTestId('pin-input')

    userEvent.type(inputs[0], '1')
    userEvent.type(inputs[1], '{backspace}')

    expect(inputs[0]).toHaveValue('')
    expect(inputs[0]).toHaveFocus()
  })
})
