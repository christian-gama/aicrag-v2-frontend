import { DateTime } from 'luxon'
import React from 'react'
import { useSelector } from 'react-redux'
import { CalendarStates } from '@/application/models/calendar/protocols/calendar.model'
import { RootState } from '@/application/store'
import writeMonthYear from '@/application/utils/writeMonthYear'
import { calendarHeaderDateClasses } from './CalendarHeaderDate.css'

const CalendarHeaderDate: React.FC = () => {
  const calendarDate = useSelector<RootState, CalendarStates['calendarDate']>((state) => state.calendar.calendarDate)

  return (
    <span className={calendarHeaderDateClasses.headerDateStyle} data-testid="calendar-header-date">
      {writeMonthYear(DateTime.fromMillis(calendarDate).monthLong, DateTime.fromMillis(calendarDate).year)}
    </span>
  )
}

export default CalendarHeaderDate
