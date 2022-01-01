import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calendarActions } from '@/application/models/calendar'
import { AppDispatch, RootState } from '@/application/store'
import CalendarWrapper from '@/presentation/components/Calendar/CalendarWrapper'
import CalendarBody from '@/presentation/components/Calendar/subComponents/body/CalendarBody/CalendarBody'
import CalendarDaysContainer from './CalendarDaysContainer'
import CalendarFooterContainer from './CalendarFooterContainer'
import CalendarHeaderContainer from './CalendarHeaderContainer'
import CalendarProps from './CalendarProps'
import CalendarWeekDayContainer from './CalendarWeekDayContainer'

const Calendar: React.FC<CalendarProps> = (props) => {
  const { resetCalendar, closeCalendar } = calendarActions
  const { previousDate } = props

  const dispatch = useDispatch<AppDispatch>()
  const isCalendarOpen = useSelector<RootState, boolean>((state) => state.calendar.isCalendarOpen)

  useEffect(() => {
    dispatch(resetCalendar(previousDate))
  }, [])

  return (
    <CalendarWrapper
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
    </CalendarWrapper>
  )
}

export default Calendar
