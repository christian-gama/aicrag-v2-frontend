import render from '@/../tests/config/renderWithProvider'
import calendarStoreMock from '@/../tests/mocks/calendarStore.mock'
import { cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DateTime } from 'luxon'
import React from 'react'
import OverlayRoot from '@/tests/helpers/overlayRoot'
import Calendar from '../Calendar'

const makeSut = (): void => {
  render(<Calendar previousDate={DateTime.now().toMillis()} />, { ...calendarStoreMock })
}

describe('CalendarFooter', () => {
  const overlayRoot = new OverlayRoot()

  afterAll(() => {
    jest.clearAllMocks()
  })

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('should be in the document', () => {
    makeSut()

    const calendarFooter = screen.getByTestId('calendar-footer')

    expect(calendarFooter).toBeInTheDocument()
  })

  it('should close the Calendar when clicking on confirm', () => {
    makeSut()

    const confirmButton = screen.getByTestId('calendar-confirm-button')
    userEvent.click(confirmButton)

    expect(confirmButton).not.toBeInTheDocument()
  })

  it('should close the Calendar when clicking on cancel', () => {
    makeSut()

    const cancelButton = screen.getByTestId('calendar-cancel-button')
    userEvent.click(cancelButton)

    expect(cancelButton).not.toBeInTheDocument()
  })
})
