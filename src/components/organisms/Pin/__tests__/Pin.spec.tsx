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
    render(<Pin />)
    const pin = screen.getByTestId('pin')

    expect(pin).toBeInTheDocument()
  })

  it('redirects to the correct page when clicking on Link', () => {
    render(<Pin />)
    const link = screen.getByText(/backicon/i)

    userEvent.click(link)

    expect(mockLink).toHaveBeenCalledWith({
      children: expect.anything(),
      'aria-label': expect.anything(),
      to: '/'
    })
  })
})
