import { render, cleanup, screen } from '@testing-library/react'
import { ChevronIcon } from '..'

describe('ChevronIcon ', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<ChevronIcon />)
    const chevronIcon = screen.getByTestId('chevron-icon')

    expect(chevronIcon).toBeInTheDocument()
  })
})
