import { renderWithProviders } from '@/tests/helpers'
import { cleanup, screen } from '@testing-library/react'
import { SignInView } from '..'

describe('SignInView', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    renderWithProviders(<SignInView />)
    const button = screen.getByRole('button', {
      name: /acessar/i
    })

    expect(button).toBeInTheDocument()
  })
})
