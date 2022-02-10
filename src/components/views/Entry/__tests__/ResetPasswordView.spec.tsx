import { renderWithProviders, setupTests } from '@/tests/helpers'
import { mockVariables } from '@/tests/mocks'
import { verifyResetPasswordTokenMock } from '@/tests/mocks/queries'
import { screen } from '@testing-library/react'
import { ResetPasswordView } from '..'

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
  useParams: () => ({
    token: mockVariables.token
  })
}))

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
