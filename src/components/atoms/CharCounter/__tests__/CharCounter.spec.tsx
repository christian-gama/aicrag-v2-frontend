import { render, cleanup, screen } from '@testing-library/react'
import { CharCounter } from '..'

describe('CharCounter', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<CharCounter maxLength={10} value="" />)
    const charCounter = screen.getByTestId('char-counter')

    expect(charCounter).toBeInTheDocument()
  })
})
