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

  it('should render correctly', () => {
    makeSut()

    const horizontalScrollBar = screen.getByTestId('horizontal-scroll-bar')

    expect(horizontalScrollBar).toBeInTheDocument()
  })

  it('should render children', () => {
    makeSut()

    const children = screen.getByText('Children')

    expect(children).toBeInTheDocument()
  })
})
