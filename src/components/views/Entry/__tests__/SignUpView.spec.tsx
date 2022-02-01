import { renderWithProviders } from '@/tests/helpers'
import { cleanup, screen } from '@testing-library/react'
import { SignUpView } from '..'

describe('SignUpView', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    renderWithProviders(<SignUpView />)
    const button = screen.getByRole('button', {
      name: /criar conta/i
    })

    expect(button).toBeInTheDocument()
  })
})
