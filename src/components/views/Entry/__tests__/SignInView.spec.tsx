import { renderWithProviders, setupTests } from '@/tests/helpers'
import { screen } from '@testing-library/react'
import { SignInView } from '..'

describe('SignInView', () => {
  setupTests()

  it('renders correctly', async () => {
    await renderWithProviders(<SignInView />)
    const button = screen.getByRole('button', {
      name: /acessar/i
    })

    expect(button).toBeInTheDocument()
  })
})
