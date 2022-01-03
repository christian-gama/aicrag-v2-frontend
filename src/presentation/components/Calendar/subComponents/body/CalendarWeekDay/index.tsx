import React from 'react'
import CalendarWeekDayProps from './CalendarWeekDayProps.model'
import { calendarWeekDayClasses } from './stylesheet/CalendarWeekDay.css'

const CalendarWeekDay: React.FC<CalendarWeekDayProps> = (props) => {
  const { weekDay } = props

  return <span className={calendarWeekDayClasses.weekDayStyle}>{weekDay}</span>
}

export default CalendarWeekDay
