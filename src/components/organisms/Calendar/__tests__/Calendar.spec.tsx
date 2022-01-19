import render from '@/../tests/config/renderWithProvider'
import calendarStoreMock from '@/../tests/mocks/calendarStore.mock'
import OverlayRoot from '@/tests/helpers/overlayRoot'
import { calendarActions } from '@/context/models/calendar/calendar.actions'
import { AppDispatch } from '@/context/store'
import { screen, fireEvent, cleanup } from '@testing-library/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import Calendar from '..'

const DummyButton = () => {
  const dispatch = useDispatch<AppDispatch>()

  const openCalendarHandler = () => {
    dispatch(calendarActions.openCalendar())
  }

  const closeCalendarHandler = () => {
    dispatch(calendarActions.closeCalendar())
  }

  return (
    <div>
      <button onClick={openCalendarHandler} data-testid="open-button">
        OpenCalendar
      </button>
      <button onClick={closeCalendarHandler} data-testid="close-button">
        CloseCalendar
      </button>
    </div>
  )
}

const makeSut = (): void => {
  render(
    <div>
      <DummyButton />
      <Calendar previousDate={Date.now()} />
    </div>,
    { ...calendarStoreMock }
  )
}

describe('Calendar', () => {
  const overlayRoot = new OverlayRoot()

  afterEach(() => {
    cleanup()
    overlayRoot.removeOverlayRoot()
  })

  beforeEach(() => {
    overlayRoot.addOverlayRoot()
  })

  it('should render the calendar', () => {
    makeSut()

    const calendarContainer = screen.getByTestId('calendar-wrapper')

    expect(calendarContainer).toBeInTheDocument()
  })

  it('should close the calendar if click on backdrop', () => {
    makeSut()

    const backdrop = screen.getByTestId('backdrop')
    backdrop.dispatchEvent(new MouseEvent('click', { bubbles: true }))

    expect(backdrop).not.toBeInTheDocument()
  })

  it('should open the calendar using the openCalendar action if the calendar is not open', () => {
    makeSut()

    let calendarContainer = screen.getByTestId('calendar-wrapper')
    const closeCalendarButton = screen.getByTestId('close-button')
    fireEvent.click(closeCalendarButton)
    expect(calendarContainer).not.toBeInTheDocument()

    const openCalendarButton = screen.getByTestId('open-button')
    fireEvent.click(openCalendarButton)
    calendarContainer = screen.getByTestId('calendar-wrapper')
    expect(calendarContainer).toBeInTheDocument()
  })
})
