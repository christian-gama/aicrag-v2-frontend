import { renderWithProviders } from '@/tests/helpers'
import { cleanup, screen } from '@testing-library/react'
import { SignIn } from '..'

describe('SignIn', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    renderWithProviders(<SignIn />)
    const button = screen.getByRole('button', {
      name: /acessar/i
    })

    expect(button).toBeInTheDocument()
  })
})
