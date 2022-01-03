import React from 'react'
import { headerStyle } from './stylesheet'

const CalendarHeader: React.FC = (props) => {
  return (
    <div className={headerStyle} data-testid="calendar-header">
      {props.children}
    </div>
  )
}

export default CalendarHeader
