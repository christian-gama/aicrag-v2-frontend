import { DateTime } from 'luxon'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { calendarActions } from '@/application/models/calendar'
import { CalendarStates } from '@/application/models/calendar/protocols/calendar.model'
import { RootState, AppDispatch } from '@/application/store'
import ChevronIcon from '../../../../UI/icons/Chevron'
import CalendarHeaderDate from '../CalendarHeaderDate'
import { CalendarHeaderClasses } from './CalendarHeader.css'

const CalendarHeader: React.FC = () => {
  const { setCalendarDate } = calendarActions

  const calendarDate = useSelector<RootState, CalendarStates['calendarDate']>((state) => state.calendar.calendarDate)
  const dispatch = useDispatch<AppDispatch>()

  // Methods
  const handleNextMonth = (): void => {
    dispatch(setCalendarDate(DateTime.fromMillis(calendarDate).plus({ months: 1 }).toMillis()))
  }

  const handlePreviousMonth = (): void => {
    dispatch(setCalendarDate(DateTime.fromMillis(calendarDate).minus({ months: 1 }).toMillis()))
  }

  return (
    <div className={CalendarHeaderClasses.calendarHeaderStyle} data-testid="calendar-header">
      <ChevronIcon color="white" direction="left" onClick={handlePreviousMonth} />

      <CalendarHeaderDate />

      <ChevronIcon color="white" direction="right" onClick={handleNextMonth} />
    </div>
  )
}

export default CalendarHeader
