import { render, cleanup, screen } from '@testing-library/react'
import { H1 } from '..'

describe('H1', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<H1 />)
    const h1 = screen.getByTestId('h1')

    expect(h1).toBeInTheDocument()
  })
})
