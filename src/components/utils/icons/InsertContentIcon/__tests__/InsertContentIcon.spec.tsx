import { renderWithProviders } from '@/tests/helpers'
import { cleanup, screen } from '@testing-library/react'
import { InsertContentIcon } from '..'

describe('InsertContentIcon', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    renderWithProviders(<InsertContentIcon />)
    const insertContentIcon = screen.getByTestId('insert-content-icon')

    expect(insertContentIcon).toBeInTheDocument()
  })
})
