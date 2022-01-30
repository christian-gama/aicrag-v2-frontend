import { render, cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pin } from '..'

const mockLink = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: (props: any) => {
    mockLink(props)

    return <>BackIcon</>
  }
}))

describe('Pin', () => {
  afterEach(() => {
    cleanup()
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

  it("has an onClick instead of To if it's not a page", () => {
    render(<Pin isPage={false} isOpen />)
    const link = screen.getByText(/backicon/i)

    userEvent.click(link)

    expect(mockLink).toHaveBeenCalledWith({
      children: expect.anything(),
      'aria-label': expect.anything(),
      onClick: expect.anything(),
      to: ''
    })
  })

  it('does not render if isOpen is false', () => {
    render(<Pin isPage={false} isOpen={false} />)
    const pin = screen.queryByTestId('pin')

    expect(pin).not.toBeInTheDocument()
  })
})
