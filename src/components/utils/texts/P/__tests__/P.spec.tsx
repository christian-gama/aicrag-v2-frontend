import { render, cleanup, screen } from '@testing-library/react'
import { P } from '..'

describe('P', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<P />)
    const p = screen.getByTestId('p')

    expect(p).toBeInTheDocument()
  })

  it('renders as bold', () => {
    render(<P bold />)
    const strong = screen.getByTestId('strong')

    expect(strong).toBeInTheDocument()
  })
})
