import { setupTests } from '@/tests/helpers'
import { render, screen } from '@testing-library/react'
import { Divider } from '..'

describe('Divider', () => {
  setupTests()

  it('renders correctly', () => {
    render(<Divider />)
    const divider = screen.getByTestId('divider')

    expect(divider).toBeInTheDocument()
  })
})
