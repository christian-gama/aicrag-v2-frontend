import React from 'react'
import CalendarWeekDayProps from './CalendarWeekDay.model'
import * as style from './stylesheet'

const CalendarWeekDay: React.FC<CalendarWeekDayProps> = (props) => {
  const { weekDay } = props

  return <span className={style.bodyWeekday}>{weekDay}</span>
}

export default CalendarWeekDay
