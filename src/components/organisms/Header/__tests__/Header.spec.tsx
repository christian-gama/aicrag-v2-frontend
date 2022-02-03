import { render, cleanup, screen } from '@testing-library/react'
import { Header } from '..'

describe('Header', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<Header />)
    const header = screen.getByTestId('header')

    expect(header).toBeInTheDocument()
  })
})
