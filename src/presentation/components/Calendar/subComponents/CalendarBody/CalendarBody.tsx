import React from 'react'
import CalendarDays from '../CalendarDays'
import CalendarWeekday from '../CalendarWeekday'
import * as style from './stylesheet'

const CalendarBody: React.FC = () => {
  return (
    <div className={style.calendarBody} data-testid="calendar-body">
      <CalendarWeekday />

      <CalendarDays />
    </div>
  )
}

export default CalendarBody
