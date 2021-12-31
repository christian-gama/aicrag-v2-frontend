import React from 'react'
import { calendarBodyClasses } from './CalendarBody.css'

const CalendarBody: React.FC = (props) => {
  const { children } = props

  return (
    <div className={calendarBodyClasses.bodyStyle} data-testid="calendar-body">
      {children}
    </div>
  )
}

export default CalendarBody
