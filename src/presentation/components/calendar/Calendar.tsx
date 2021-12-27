import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/infra/store'
import { closeCalendar, resetCalendar, setPreviousDate } from '@/infra/store/calendar'
import Modal from '../UI/modal/Modal'
import { calendarClasses } from './Calendar.css'
import { CalendarBody } from './components/body/CalendarBody'
import { CalendarFooter } from './components/footer/CalendarFooter'
import CalendarHeader from './components/header/CalendarHeader'

const Calendar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const selectedDate = useSelector<RootState, number>((state) => state.calendar.selectedDate)
  const isCalendarOpen = useSelector<RootState, boolean>((state) => state.calendar.isCalendarOpen)

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
