import { renderWithProviders, waitFetch } from '@/tests/helpers'
import { verifyResetPasswordTokenMock } from '@/tests/mocks/queries'
import { cleanup, screen } from '@testing-library/react'
import { ResetPasswordView } from '..'

describe('ResetPasswordView', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', async () => {
    renderWithProviders(<ResetPasswordView />, {
      apolloMocks: [verifyResetPasswordTokenMock()]
    })
    await waitFetch()
    const button = screen.getByRole('button', {
      name: /resetar senha/i
    })

    expect(button).toBeInTheDocument()
  })
})
