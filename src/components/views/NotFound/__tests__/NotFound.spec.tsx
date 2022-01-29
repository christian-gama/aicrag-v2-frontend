import { renderWithProviders } from '@/tests/helpers'
import { cleanup, screen } from '@testing-library/react'
import { NotFound } from '..'

describe('NotFound', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    renderWithProviders(<NotFound />)
    const notFoundView = screen.getByTestId('not-found')

    expect(notFoundView).toBeInTheDocument()
  })
})
