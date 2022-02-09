import { renderWithProviders, setupTests } from '@/tests/helpers'
import { verifyResetPasswordTokenMock } from '@/tests/mocks/queries'
import { screen } from '@testing-library/react'
import { ResetPasswordView } from '..'

describe('ResetPasswordView', () => {
  setupTests()

  it('renders correctly', async () => {
    await renderWithProviders(<ResetPasswordView />, {
      apolloMocks: [verifyResetPasswordTokenMock()]
    })
    const button = screen.getByRole('button', {
      name: /resetar senha/i
    })

    expect(button).toBeInTheDocument()
  })
})
