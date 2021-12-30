import React from 'react'
import CalendarDays from '../CalendarDays'
import CalendarWeekDay from '../CalendarWeekDay'
import { calendarBodyClasses } from './CalendarBody.css'
import CalendarBodyProps from './CalendarBody.model'

const CalendarBody: React.FC<CalendarBodyProps> = ({ name }) => {
  return (
    <div className={calendarBodyClasses.calendarBodyStyle} data-testid="calendar-body">
      <CalendarWeekDay />
      <CalendarDays name={name} />
    </div>
  )
}

export default CalendarBody
