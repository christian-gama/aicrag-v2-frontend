import { DateTime } from 'luxon'
import React from 'react'
import writeMonthYear from '@/application/utils/writeMonthYear'
import { calendarHeaderDateClasses } from './CalendarHeaderDate.css'
import CalendarHeaderDateProps from './CalendarHeaderDate.model'

const CalendarHeaderDate: React.FC<CalendarHeaderDateProps> = (props) => {
  return (
    <span className={calendarHeaderDateClasses.headerDateStyle} data-testid="calendar-header-date">
      {writeMonthYear(DateTime.fromMillis(props.calendarDate).monthLong, DateTime.fromMillis(props.calendarDate).year)}
    </span>
  )
}

export default CalendarHeaderDate
