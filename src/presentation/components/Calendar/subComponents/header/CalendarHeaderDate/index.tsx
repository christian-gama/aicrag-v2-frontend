import React from 'react'
import CalendarHeaderDateProps from './CalendarHeaderDate.model'
import { calendarHeaderDateClasses } from './stylesheet/CalendarHeaderDate.css'

const CalendarHeaderDate: React.FC<CalendarHeaderDateProps> = (props) => {
  const { monthAndYear } = props

  return (
    <span className={calendarHeaderDateClasses.dateStyle} data-testid="calendar-header-date">
      {monthAndYear}
    </span>
  )
}

export default CalendarHeaderDate
