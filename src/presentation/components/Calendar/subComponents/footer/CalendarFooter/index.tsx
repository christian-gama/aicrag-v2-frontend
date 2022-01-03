import React from 'react'
import { calendarFooterClasses } from './stylesheet/CalendarFooter.css'

const CalendarFooter: React.FC = (props) => {
  const { children } = props

  return (
    <div className={calendarFooterClasses.footerStyle} data-testid="calendar-footer">
      {children}
    </div>
  )
}

export default CalendarFooter
