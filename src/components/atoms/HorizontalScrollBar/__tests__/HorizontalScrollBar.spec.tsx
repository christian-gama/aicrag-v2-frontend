import { cleanup, render } from '@testing-library/react'
import React from 'react'
import getElement from '@/tests/helpers/getElement'
import HorizontalScrollBar from '../HorizontalScrollBar'

describe('HorizontalScrollBar ', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    render(<HorizontalScrollBar />)
    const horizontalScrollBar = getElement('horizontal-scroll-bar')

    expect(horizontalScrollBar).toBeInTheDocument()
  })
})
