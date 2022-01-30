import { render, cleanup, screen } from '@testing-library/react'
import { Pin } from '..'

describe('Pin', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<Pin />)
    const pin = screen.getByTestId('pin')

    expect(pin).toBeInTheDocument()
  })
})
