import { render, cleanup, screen } from '@testing-library/react'
import { CheckCircleIcon } from '..'

describe('CheckCircleIcon ', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<CheckCircleIcon />)
    const checkCircleIcon = screen.getByTestId('check-circle-icon')

    expect(checkCircleIcon).toBeInTheDocument()
  })
})
