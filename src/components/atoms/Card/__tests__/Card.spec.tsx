import { render, cleanup, screen } from '@testing-library/react'
import { Card } from '../Card'

describe('Card', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<Card />)
    const card = screen.getByTestId('card')

    expect(card).toBeInTheDocument()
  })
})
