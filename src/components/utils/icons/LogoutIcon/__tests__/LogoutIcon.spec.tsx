import { authVar } from '@/external/graphql/reactiveVars'
import { render, cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  it('calls logout when clicking on icon', () => {
    const logoutSpy = jest.spyOn(authVar, 'logout')
    render(<LogoutIcon />)
    const logout = screen.getByTestId('logout-icon')

    userEvent.click(logout)

    expect(logoutSpy).toHaveBeenCalled()
  })
})
