import React from 'react'
import CalendarWeekdayProps from './CalendarWeekday.model'
import * as style from './stylesheet'

const CalendarWeekday: React.FC<CalendarWeekdayProps> = (props) => {
  const { weekDay } = props

  return <span className={style.weekday}>{weekDay}</span>
}

export default CalendarWeekday
