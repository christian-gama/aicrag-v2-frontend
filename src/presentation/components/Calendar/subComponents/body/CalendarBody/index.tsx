import React from 'react'
import CalendarDays from '../CalendarDays'
import CalendarWeekDay from '../CalendarWeekDay'
import { calendarBodyClasses } from './CalendarBody.css'

const CalendarBody: React.FC = () => {
  return (
    <div className={calendarBodyClasses.calendarBodyStyle} data-testid="calendar-body">
      <CalendarWeekDay />
      <CalendarDays />
    </div>
  )
}

export default CalendarBody
