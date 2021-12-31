import React from 'react'
import { calendarHeaderDateClasses } from './CalendarHeaderDate.css'
import CalendarHeaderDateProps from './CalendarHeaderDate.model'

const CalendarHeaderDate: React.FC<CalendarHeaderDateProps> = (props) => {
  const { monthAndYear } = props

  return (
    <span className={calendarHeaderDateClasses.headerDateStyle} data-testid="calendar-header-date">
      {monthAndYear}
    </span>
  )
}

export default CalendarHeaderDate
