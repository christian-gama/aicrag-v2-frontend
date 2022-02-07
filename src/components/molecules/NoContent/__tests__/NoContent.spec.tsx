import { renderWithProviders } from '@/tests/helpers'
import { cleanup, screen } from '@testing-library/react'
import { NoContent } from '..'

describe('NoContent', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    renderWithProviders(<NoContent />)
    const noContent = screen.getByTestId('no-content')

    expect(noContent).toBeInTheDocument()
  })
})
