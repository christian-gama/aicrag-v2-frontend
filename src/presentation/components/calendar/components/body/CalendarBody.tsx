import { DateTime } from 'luxon'
import React from 'react'
import { calendarBodyClasses } from './CalendarBody.css'
import CalendarDays from './CalendarDays'
import CalendarWeekDay from './CalendarWeekDay'

interface CalendarBodyProps {
  calendarDate: DateTime
}

export const CalendarBody: React.FC<CalendarBodyProps> = ({ calendarDate }) => {
  return (
    <div className={calendarBodyClasses.calendarBodyStyle} data-testid="calendar-body">
      <CalendarWeekDay />
      <CalendarDays calendarDate={calendarDate} />
    </div>
  )
}
