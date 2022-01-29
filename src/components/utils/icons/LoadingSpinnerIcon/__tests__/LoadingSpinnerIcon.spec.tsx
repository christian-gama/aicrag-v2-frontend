import { render, cleanup, screen } from '@testing-library/react'
import { LoadingSpinnerIcon } from '..'

describe('LoadingSpinnerIcon ', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render correctly', () => {
    render(<LoadingSpinnerIcon />)
    const loadingSpinnerIcon = screen.getByTestId('loading-spinner-icon')

    expect(loadingSpinnerIcon).toBeInTheDocument()
  })
})
