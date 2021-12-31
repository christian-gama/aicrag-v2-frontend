import React from 'react'
import { calendarWeekDayClasses } from './CalendarWeekDay.css'
import CalendarWeekDayProps from './CalendarWeekDayProps.model'

const CalendarWeekDay: React.FC<CalendarWeekDayProps> = (props) => {
  const { weekDay } = props

  return <span className={calendarWeekDayClasses.weekDayStyle}>{weekDay}</span>
}

export default CalendarWeekDay
