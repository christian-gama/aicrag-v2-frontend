import { render, cleanup, screen } from '@testing-library/react'
import { MenuIcon } from '..'

describe('MenuIcon', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<MenuIcon />)
    const menuIcon = screen.getByTestId('menu-icon')

    expect(menuIcon).toBeInTheDocument()
  })

  it('renders correctly with isOpen as true', () => {
    render(<MenuIcon isOpen />)
    const menuIcon = screen.getByTestId('menu-icon')

    expect(menuIcon).toBeInTheDocument()
  })
})
