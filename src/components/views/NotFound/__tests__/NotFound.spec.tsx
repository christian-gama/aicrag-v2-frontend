import { renderWithProviders, setupTests } from '@/tests/helpers'
import { screen } from '@testing-library/react'
import { NotFound } from '..'

describe('NotFound', () => {
  setupTests()

  it('renders correctly', async () => {
    await renderWithProviders(<NotFound />)
    const notFoundView = screen.getByTestId('not-found')

    expect(notFoundView).toBeInTheDocument()
  })
})
