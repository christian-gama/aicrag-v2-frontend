import render from '@/../tests/config/renderWithProvider'
import calendarStoreMock from '@/../tests/mocks/calendarStore.mock'
import { cleanup, screen, fireEvent } from '@testing-library/react'
import { DateTime } from 'luxon'
import React from 'react'
import Calendar from '../Calendar'

const makeSut = (): void => {
  render(<Calendar previousDate={DateTime.now().toMillis()} />, { ...calendarStoreMock })
}

describe('CalendarFooter', () => {
  afterEach(() => {
    cleanup()
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  beforeEach(() => {
    const container = document.createElement('div')
    container.setAttribute('id', 'overlay-root')
    document.body.appendChild(container)
  })

  it('should be in the document', () => {
    makeSut()

    const calendarFooter = screen.getByTestId('calendar-footer')

    expect(calendarFooter).toBeInTheDocument()
  })

  it('should close the Calendar when clicking on confirm', () => {
    makeSut()

    const confirmButton = screen.getByTestId('calendar-confirm-button')
    fireEvent.click(confirmButton)

    expect(confirmButton).not.toBeInTheDocument()
  })

  it('should close the Calendar when clicking on cancel', () => {
    makeSut()

    const cancelButton = screen.getByTestId('calendar-cancel-button')
    fireEvent.click(cancelButton)

    expect(cancelButton).not.toBeInTheDocument()
  })
})