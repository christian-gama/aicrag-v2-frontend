import { render, cleanup, screen } from '@testing-library/react'
import { Center } from '..'

describe('Center', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<Center />)
    const center = screen.getByTestId('center')

    expect(center).toBeInTheDocument()
  })
})
