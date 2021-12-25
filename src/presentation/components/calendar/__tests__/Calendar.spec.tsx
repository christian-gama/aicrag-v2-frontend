import render from '@/../tests/config/renderWithProvider'
import calendarStoreMock from '@/../tests/mocks/calendarStore.mock'
import { screen } from '@testing-library/react'
import React from 'react'
import Calendar from '../Calendar'

const makeSut = (): void => {
  render(<Calendar />, { ...calendarStoreMock })
}

describe('Calendar', () => {
  it('should render the calendar', () => {
    makeSut()

    const calendarContainer = screen.getByTestId('calendar-container')
    expect(calendarContainer).toBeInTheDocument()
  })
})
