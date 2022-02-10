import { renderWithProviders, setupTests } from '@/tests/helpers'
import { screen } from '@testing-library/react'
import { SignUpView } from '..'

describe('SignUpView', () => {
  setupTests()

  it('renders correctly', async () => {
    await renderWithProviders(<SignUpView />)
    const button = screen.getByRole('button', {
      name: /criar conta/i
    })

    expect(button).toBeInTheDocument()
  })
})
