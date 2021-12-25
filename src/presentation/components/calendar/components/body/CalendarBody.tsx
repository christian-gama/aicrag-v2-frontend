import React from 'react'
import { calendarBodyClasses } from './CalendarBody.css'
import CalendarDays from './CalendarDays'
import CalendarWeekDay from './CalendarWeekDay'

export const CalendarBody: React.FC = () => {
  return (
    <div className={calendarBodyClasses.calendarBodyStyle} data-testid="calendar-body">
      <CalendarWeekDay />
      <CalendarDays />
    </div>
  )
}
