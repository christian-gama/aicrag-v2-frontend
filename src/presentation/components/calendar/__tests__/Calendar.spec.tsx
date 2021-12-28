import render from '@/../tests/config/renderWithProvider'
import calendarStoreMock from '@/../tests/mocks/calendarStore.mock'
import { screen } from '@testing-library/react'
import React from 'react'
import makeTimerValidator from '@/main/factories/validation/makeTimerValidator'
import Calendar from '../Calendar'

const makeSut = (): void => {
  render(<Calendar name="createTaskCalendar" validation={makeTimerValidator()} />, { ...calendarStoreMock })
}

describe('Calendar', () => {
  beforeAll(() => {
    const container = document.createElement('div')
    container.setAttribute('id', 'overlay-root')
    document.body.appendChild(container)
  })

  it('should render the calendar', () => {
    makeSut()

    const calendarContainer = screen.getByTestId('calendar-container')

    expect(calendarContainer).toBeInTheDocument()
  })

  it('should close the calendar if click on backdrop', () => {
    makeSut()

    const backdrop = screen.getByTestId('backdrop')
    backdrop.dispatchEvent(new MouseEvent('click', { bubbles: true }))

    expect(backdrop).not.toBeInTheDocument()
  })
})
