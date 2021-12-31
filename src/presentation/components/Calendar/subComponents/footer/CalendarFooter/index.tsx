import React from 'react'
import { calendarFooterClasses } from './CalendarFooter.css'

const CalendarFooter: React.FC = (props) => {
  const { children } = props

  return (
    <div className={calendarFooterClasses.calendarFooterStyle} data-testid="calendar-footer">
      {children}
    </div>
  )
}

export default CalendarFooter
