import React from 'react'
import CalendarHeaderDateProps from './CalendarHeaderDate.model'
import * as style from './stylesheet'

const CalendarHeaderDate: React.FC<CalendarHeaderDateProps> = (props) => {
  const { monthAndYear } = props

  return (
    <span className={style.headerDate} data-testid="calendar-header-date">
      {monthAndYear}
    </span>
  )
}

export default CalendarHeaderDate
