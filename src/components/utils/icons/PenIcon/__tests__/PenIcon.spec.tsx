import { render, cleanup, screen } from '@testing-library/react'
import { PenIcon } from '..'

describe('PenIcon', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<PenIcon />)
    const penIcon = screen.getByTestId('pen-icon')

    expect(penIcon).toBeInTheDocument()
  })
})
