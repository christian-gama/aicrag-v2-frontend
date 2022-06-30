import { renderWithProviders, setupTests } from '@/tests/helpers'
import { screen } from '@testing-library/react'
import { FormatView } from '..'

describe('FormatView', () => {
  setupTests()

  it('renders correctly', async () => {
    await renderWithProviders(<FormatView />)
    const formatView = screen.getByTestId('format-view')

    expect(formatView).toBeInTheDocument()
  })
})
