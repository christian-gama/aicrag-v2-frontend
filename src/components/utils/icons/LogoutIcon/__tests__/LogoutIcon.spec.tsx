import { render, cleanup, screen } from '@testing-library/react'
import { LogoutIcon } from '..'

describe('LogoutIcon', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<LogoutIcon />)
    const logout = screen.getByTestId('logout-icon')

    expect(logout).toBeInTheDocument()
  })
})
