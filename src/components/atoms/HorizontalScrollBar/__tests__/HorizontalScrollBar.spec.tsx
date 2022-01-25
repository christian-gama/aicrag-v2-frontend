import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import HorizontalScrollBar from '../HorizontalScrollBar'

const makeSut = () => {
  return render(
    <HorizontalScrollBar>
      <div>Children</div>
    </HorizontalScrollBar>
  )
}

describe('HorizontalScrollBar ', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    makeSut()

    const horizontalScrollBar = screen.getByTestId('horizontal-scroll-bar')

    expect(horizontalScrollBar).toBeInTheDocument()
  })
})
