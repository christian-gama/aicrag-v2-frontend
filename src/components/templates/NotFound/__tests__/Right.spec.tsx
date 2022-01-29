import { cleanup, screen } from '@testing-library/react'
import { renderWithProviders } from '@/tests/helpers'
import { Right } from '../Right'

describe('Right', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    renderWithProviders(<Right />)
    const text = screen.getByText(/esta página não está disponível/gi)

    expect(text).toBeInTheDocument()
  })
})
