import { render, cleanup, screen } from '@testing-library/react'
import { CheckIcon } from '..'

describe('CheckIcon ', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<CheckIcon />)
    const checkIcon = screen.getByTestId('check-icon')

    expect(checkIcon).toBeInTheDocument()
  })
})
