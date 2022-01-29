import { render, cleanup, screen } from '@testing-library/react'
import { H4 } from '..'

describe('H4', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<H4 />)
    const h4 = screen.getByTestId('h4')

    expect(h4).toBeInTheDocument()
  })
})
