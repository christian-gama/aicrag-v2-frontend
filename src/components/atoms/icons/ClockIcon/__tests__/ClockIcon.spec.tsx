import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import ClockIcon from '../ClockIcon'

const makeSut = () => {
  return render(<ClockIcon />)
}

describe('ClockIcon ', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render correctly', () => {
    makeSut()

    const clockIcon = screen.getByTestId('clock-icon')

    expect(clockIcon).toBeInTheDocument()
  })
})
