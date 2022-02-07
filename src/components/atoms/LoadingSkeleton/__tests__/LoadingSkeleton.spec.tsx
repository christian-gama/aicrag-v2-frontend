import { render, cleanup, screen } from '@testing-library/react'
import { LoadingSkeleton } from '..'

describe('LoadingSkeleton', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<LoadingSkeleton columns={3} rows={3} />)
    const loadingSkeleton = screen.getByTestId('loading-skeleton')

    expect(loadingSkeleton).toBeInTheDocument()
  })
})
