import { cleanup, screen } from '@testing-library/react'
import { renderWithProviders } from '@/tests/helpers'
import { Left } from '../Left'

describe('Left', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    renderWithProviders(<Left />)
    const logo = screen.getByTestId('logo-icon')

    expect(logo).toBeInTheDocument()
  })
})
