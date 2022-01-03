import React from 'react'
import CalendarWeekDayProps from './CalendarWeekDayProps.model'
import { weekDayStyle } from './stylesheet'

const CalendarWeekDay: React.FC<CalendarWeekDayProps> = (props) => {
  const { weekDay } = props

  return <span className={weekDayStyle}>{weekDay}</span>
}

export default CalendarWeekDay
