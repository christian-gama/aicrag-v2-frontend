import { setupTests } from '@/tests/helpers'
import { render, screen } from '@testing-library/react'
import { LoadingSkeleton } from '..'

describe('LoadingSkeleton', () => {
  setupTests()

  it('renders correctly', () => {
    render(<LoadingSkeleton columns={3} amount={3} />)
    const loadingSkeleton = screen.getByTestId('loading-skeleton')

    expect(loadingSkeleton).toBeInTheDocument()
  })
})
