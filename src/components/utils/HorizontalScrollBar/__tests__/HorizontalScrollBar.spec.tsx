import { render, cleanup, screen } from '@testing-library/react'
import { HorizontalScrollBar } from '..'

describe('HorizontalScrollBar ', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<HorizontalScrollBar />)
    const horizontalScrollBar = screen.getByTestId('horizontal-scroll-bar')

    expect(horizontalScrollBar).toBeInTheDocument()
  })
})
