import { render, cleanup, screen } from '@testing-library/react'
import { BackIcon } from '..'

describe('BackIcon', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<BackIcon />)
    const backIcon = screen.getByTestId('back-icon')

    expect(backIcon).toBeInTheDocument()
  })
})
