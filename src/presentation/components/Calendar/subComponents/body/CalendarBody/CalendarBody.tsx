import React from 'react'
import { bodyStyle } from './stylesheet'

const CalendarBody: React.FC = (props) => {
  const { children } = props

  return (
    <div className={bodyStyle} data-testid="calendar-body">
      {children}
    </div>
  )
}

export default CalendarBody
