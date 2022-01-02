import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calendarActions } from '@/application/models/redux/calendar'
import { AppDispatch, RootState } from '@/application/store'
import Calendar from '@/presentation/components/Calendar'
import CalendarBody from '@/presentation/components/Calendar/subComponents/body/CalendarBody/CalendarBody'
import CalendarContainerProps from './CalendarContainer.model'
import CalendarDaysContainer from './CalendarDaysContainer'
import CalendarFooterContainer from './CalendarFooterContainer'
import CalendarHeaderContainer from './CalendarHeaderContainer'
import CalendarWeekDayContainer from './CalendarWeekDayContainer'

const CalendarContainer: React.FC<CalendarContainerProps> = (props) => {
  const { resetCalendar, closeCalendar } = calendarActions
  const { previousDate } = props

  const dispatch = useDispatch<AppDispatch>()
  const isCalendarOpen = useSelector<RootState, boolean>((state) => state.calendar.isCalendarOpen)

  useEffect(() => {
    dispatch(resetCalendar(previousDate))
  }, [])

  return (
    <Calendar
      isCalendarOpen={isCalendarOpen}
      onDismiss={() => {
        dispatch(resetCalendar(previousDate))
        dispatch(closeCalendar())
      }}
    >
      <CalendarHeaderContainer />

      <CalendarBody>
        <CalendarWeekDayContainer />

        <CalendarDaysContainer />
      </CalendarBody>

      <CalendarFooterContainer />
    </Calendar>
  )
}

export default CalendarContainer
