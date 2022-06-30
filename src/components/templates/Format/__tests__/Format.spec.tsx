import { screen } from '@testing-library/dom'
import { renderWithProviders } from '@/tests/helpers'
import { Format } from '../Format'

describe('Format', () => {
  it('renders correctly', async () => {
    await renderWithProviders(<Format />)
    const format = screen.getByTestId('format')

    expect(format).toBeInTheDocument()
  })
})
