import { setupTests } from '@/tests/helpers'
import { render, screen } from '@testing-library/react'
import { Center } from '..'

describe('Center', () => {
  setupTests()

  it('renders correctly', () => {
    render(<Center />)
    const center = screen.getByTestId('center')

    expect(center).toBeInTheDocument()
  })
})
