import { renderWithProviders, setupTests } from '@/tests/helpers'
import { screen } from '@testing-library/react'
import { ForgotPasswordView } from '..'

describe('ForgotPasswordView', () => {
  setupTests()

  it('renders correctly', async () => {
    await renderWithProviders(<ForgotPasswordView />)
    const button = screen.getByRole('button', {
      name: /resetar senha/i
    })

    expect(button).toBeInTheDocument()
  })
})
