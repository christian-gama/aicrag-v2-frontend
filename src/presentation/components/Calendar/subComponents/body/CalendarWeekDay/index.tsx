import React from 'react'
import calendarWeekDayStyle from './CalendarWeekDay.css'
import CalendarWeekDayProps from './CalendarWeekDayProps.model'

const CalendarWeekDay: React.FC<CalendarWeekDayProps> = (props) => {
  const { weekDay } = props

  return <span className={calendarWeekDayStyle}>{weekDay}</span>
}

export default CalendarWeekDay
