import { render, cleanup, screen } from '@testing-library/react'
import { ErrorIcon } from '..'

describe('ErrorIcon ', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<ErrorIcon />)
    const errorIcon = screen.getByTestId('error-icon')

    expect(errorIcon).toBeInTheDocument()
  })
})
