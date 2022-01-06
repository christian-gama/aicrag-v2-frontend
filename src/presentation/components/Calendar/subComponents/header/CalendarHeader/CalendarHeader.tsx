import React from 'react'
import * as style from './stylesheet'

const CalendarHeader: React.FC = (props) => {
  return (
    <div className={style.calendarHeader} data-testid="calendar-header">
      {props.children}
    </div>
  )
}

export default CalendarHeader
