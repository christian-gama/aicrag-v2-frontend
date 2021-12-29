import { render, screen } from '@testing-library/react'
import React from 'react'
import CalendarDayNumber from '../CalendarDayNumber'

const makeSut = (children: string): void => {
  render(<CalendarDayNumber>{children}</CalendarDayNumber>)
}

describe('CalendarDayNumber', () => {
  it('should render the day based on the children', () => {
    makeSut('1')

    const day = screen.getByText('1')

    expect(day).toBeInTheDocument()
  })
})
