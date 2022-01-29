import { renderWithProviders } from '@/tests/helpers'
import { cleanup, screen } from '@testing-library/react'
import { SignUp } from '..'

describe('SignUp', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    renderWithProviders(<SignUp />)
    const button = screen.getByRole('button', {
      name: /criar conta/i
    })

    expect(button).toBeInTheDocument()
  })
})
