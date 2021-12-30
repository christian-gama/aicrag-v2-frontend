import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calendarActions } from '@/application/models/calendar'
import { AppDispatch, RootState } from '@/application/store'
import Modal from '../UI/Modal'
import { calendarClasses } from './Calendar.css'
import CalendarBody from './subComponents/body/CalendarBody'
import CalendarFooter from './subComponents/footer/CalendarFooter'
import CalendarHeader from './subComponents/header/CalendarHeader/CalendarHeader'

const Calendar: React.FC = () => {
  const { setPreviousDate, resetCalendar, closeCalendar } = calendarActions

  const dispatch = useDispatch<AppDispatch>()
  const isCalendarOpen = useSelector<RootState, boolean>((state) => state.calendar.isCalendarOpen)
  const selectedDate = useSelector<RootState, number>((state) => state.calendar.selectedDate)

  useEffect(() => {
    // TODO: Probably should set the previous state using the value from input
    dispatch(setPreviousDate(selectedDate))
  }, [])

  return (
    <Modal
      onDismiss={() => {
        dispatch(resetCalendar())
        dispatch(closeCalendar())
      }}
      isOpen={isCalendarOpen}
    >
      <div className={calendarClasses.calendarContainerStyle} data-testid="calendar-container">
        <CalendarHeader />

        <CalendarBody />

        <CalendarFooter />
      </div>
    </Modal>
  )
}

export default Calendar
