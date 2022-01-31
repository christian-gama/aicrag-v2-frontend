import { render, cleanup, screen } from '@testing-library/react'
import { Steps } from '..'

describe('Steps', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<Steps />)
    const steps = screen.getByTestId('steps')

    expect(steps).toBeInTheDocument()
  })
})
