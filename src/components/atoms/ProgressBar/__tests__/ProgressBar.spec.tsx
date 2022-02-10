import { render, screen } from '@testing-library/react'
import { ProgressBar } from '..'
import { advanceTimer, setupTests } from '@/tests/helpers'

describe('ProgressBar', () => {
  setupTests()

  it('renders correctly', () => {
    render(<ProgressBar loading />)
    const progressBar = screen.getByTestId('progress-bar')

    expect(progressBar).toBeInTheDocument()
  })

  it('dismiss when loading prop was true and then becomes false', async () => {
    jest.useFakeTimers()
    const { rerender } = render(<ProgressBar loading={true} />)
    const progressBar = screen.getByTestId('progress-bar')

    expect(progressBar).toBeInTheDocument()

    rerender(<ProgressBar loading={false} />)
    advanceTimer()

    expect(progressBar).not.toBeInTheDocument()
  })
})
