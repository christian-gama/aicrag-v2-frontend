import React from 'react'
import * as style from './stylesheet'

const CalendarBody: React.FC = (props) => {
  const { children } = props

  return (
    <div className={style.calendarBody} data-testid="calendar-body">
      {children}
    </div>
  )
}

export default CalendarBody
