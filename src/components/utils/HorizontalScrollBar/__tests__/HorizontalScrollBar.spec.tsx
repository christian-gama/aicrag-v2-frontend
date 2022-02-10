import { setupTests } from '@/tests/helpers'
import { render, screen } from '@testing-library/react'
import { HorizontalScrollBar } from '..'

describe('HorizontalScrollBar ', () => {
  setupTests()

  it('renders correctly', () => {
    render(
      <HorizontalScrollBar
        breakpoints={{ default: '100%', desktop: '100%', widescreen: '100%' }}
      />
    )
    const horizontalScrollBar = screen.getByTestId('horizontal-scroll-bar')

    expect(horizontalScrollBar).toBeInTheDocument()
  })
})
