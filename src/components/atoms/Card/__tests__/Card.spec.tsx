import { render, screen } from '@testing-library/react'
import { setupTests } from '@/tests/helpers'
import { Card } from '../Card'

describe('Card', () => {
  setupTests()

  it('renders correctly', () => {
    render(<Card />)
    const card = screen.getByTestId('card')

    expect(card).toBeInTheDocument()
  })
})
