import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import HorizontalScrollBar from '../HorizontalScrollBar'

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
