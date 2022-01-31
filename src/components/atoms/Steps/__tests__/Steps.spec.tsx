import { render, cleanup, screen } from '@testing-library/react'
import { Steps } from '..'

describe('Steps', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<Steps steps={[]} />)
    const steps = screen.getByTestId('steps')

    expect(steps).toBeInTheDocument()
  })

  it('renders a CheckIcon if stepItem is checked', () => {
    render(<Steps steps={[{ label: 'Any label', check: true }]} />)
    const checkIcon = screen.getByTestId('check-icon')

    expect(checkIcon).toBeInTheDocument()
  })

  it('does not render a CheckIcon if stepItem is not checked', () => {
    render(<Steps steps={[{ label: 'Any label', check: false }]} />)
    const checkIcon = screen.queryByTestId('check-icon')

    expect(checkIcon).not.toBeInTheDocument()
  })
})
