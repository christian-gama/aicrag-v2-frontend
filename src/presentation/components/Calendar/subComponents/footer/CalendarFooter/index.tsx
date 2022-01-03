import React from 'react'
import { footerStyle } from './stylesheet'

const CalendarFooter: React.FC = (props) => {
  const { children } = props

  return (
    <div className={footerStyle} data-testid="calendar-footer">
      {children}
    </div>
  )
}

export default CalendarFooter
