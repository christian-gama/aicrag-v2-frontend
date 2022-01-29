import { render, cleanup, screen } from '@testing-library/react'
import { Divider } from '..'

describe('Divider', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<Divider />)
    const divider = screen.getByTestId('divider')

    expect(divider).toBeInTheDocument()
  })
})
