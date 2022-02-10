import { renderWithProviders, setupTests } from '@/tests/helpers'
import { screen } from '@testing-library/react'
import { AccountSecurityView } from '..'

describe('AccountSecurityView', () => {
  setupTests()

  it('renders correctly', async () => {
    await renderWithProviders(<AccountSecurityView />)
    const accountSecurityView = screen.getByTestId('account-security-view')

    expect(accountSecurityView).toBeInTheDocument()
  })
})
