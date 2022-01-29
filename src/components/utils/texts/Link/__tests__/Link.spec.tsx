import { render, cleanup, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Link } from '..'

describe('Link', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<Link to="/" />, { wrapper: MemoryRouter })
    const link = screen.getByTestId('link')

    expect(link).toBeInTheDocument()
  })
})
