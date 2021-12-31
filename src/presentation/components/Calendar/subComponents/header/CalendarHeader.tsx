import React from 'react'
import { calendarHeaderClasses } from './CalendarHeader.css'

const CalendarHeader: React.FC = (props) => {
  return (
    <div className={calendarHeaderClasses.headerStyle} data-testid="calendar-header">
      {props.children}
    </div>
  )
}

export default CalendarHeader
