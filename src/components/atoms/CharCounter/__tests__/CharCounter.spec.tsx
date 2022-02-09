import { setupTests } from '@/tests/helpers'
import { render, screen } from '@testing-library/react'
import { CharCounter } from '..'

describe('CharCounter', () => {
  setupTests()

  it('renders correctly', () => {
    render(<CharCounter maxLength={10} value="" />)
    const charCounter = screen.getByTestId('char-counter')

    expect(charCounter).toBeInTheDocument()
  })
})
