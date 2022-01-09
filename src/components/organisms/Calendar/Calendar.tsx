import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calendarActions } from '@/application/models/redux/calendar'
import { AppDispatch, RootState } from '@/application/store'
import Modal from '../../atoms/Modal/Modal'
import CalendarBody from './CalendarBody'
import CalendarFooter from './CalendarFooter'
import CalendarHeader from './CalendarHeader'
import CalendarProps from './protocols/Calendar.model'
import * as style from './stylesheet'

const Calendar: React.FC<CalendarProps> = (props) => {
  const { resetCalendar, closeCalendar } = calendarActions
  const { previousDate } = props

  const dispatch = useDispatch<AppDispatch>()
  const isCalendarOpen = useSelector<RootState, boolean>((state) => state.calendar.isCalendarOpen)

  useEffect(() => {
    dispatch(resetCalendar(previousDate))
  }, [])

  return (
    <Modal
      onDismiss={() => {
        dispatch(resetCalendar(previousDate))
        dispatch(closeCalendar())
      }}
      isOpen={isCalendarOpen}
    >
      <div className={style.calendar} data-testid="calendar-wrapper">
        <CalendarHeader />

        <CalendarBody />

        <CalendarFooter />
      </div>
    </Modal>
  )
}

export default Calendar
