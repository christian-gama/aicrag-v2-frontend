import { render, cleanup, screen } from '@testing-library/react'
import { LogoIcon } from '..'

describe('LogoIcon', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<LogoIcon />)
    const logoIcon = screen.getByTestId('logo-icon')

    expect(logoIcon).toBeInTheDocument()
  })
})
