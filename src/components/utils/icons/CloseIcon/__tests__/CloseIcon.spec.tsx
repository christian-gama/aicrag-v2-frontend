import { render, cleanup, screen } from '@testing-library/react'
import { CloseIcon } from '..'

describe('CloseIcon ', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<CloseIcon />)
    const closeIcon = screen.getByTestId('close-icon')

    expect(closeIcon).toBeInTheDocument()
  })
})
