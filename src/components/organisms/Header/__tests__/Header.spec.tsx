import { render, cleanup, screen } from '@testing-library/react'
import { Header } from '..'

describe('Header', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<Header pageName="" />)
    const header = screen.getByTestId('header')

    expect(header).toBeInTheDocument()
  })

  it('renders the page name', () => {
    render(<Header pageName="Any name" />)
    const pageName = screen.getByText(/any name/gi)

    expect(pageName).toBeInTheDocument()
  })
})
