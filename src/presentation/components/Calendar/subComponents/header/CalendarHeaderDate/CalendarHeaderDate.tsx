import React from 'react'
import CalendarHeaderDateProps from './CalendarHeaderDate.model'
import { dateStyle } from './stylesheet'

const CalendarHeaderDate: React.FC<CalendarHeaderDateProps> = (props) => {
  const { monthAndYear } = props

  return (
    <span className={dateStyle} data-testid="calendar-header-date">
      {monthAndYear}
    </span>
  )
}

export default CalendarHeaderDate
