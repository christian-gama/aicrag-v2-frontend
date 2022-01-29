import { renderWithProviders } from '@/tests/helpers'
import { cleanup, screen } from '@testing-library/react'
import { ForgotPassword } from '..'

describe('ForgotPassword', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    renderWithProviders(<ForgotPassword />)
    const button = screen.getByRole('button', {
      name: /resetar senha/i
    })

    expect(button).toBeInTheDocument()
  })
})
