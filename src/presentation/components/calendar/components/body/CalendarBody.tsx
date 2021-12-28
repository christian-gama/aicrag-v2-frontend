import React from 'react'
import { ICalendar } from '@/infra/store/calendar'
import { calendarBodyClasses } from './CalendarBody.css'
import CalendarDays from './CalendarDays'
import CalendarWeekDay from './CalendarWeekDay'

type CalendarBodyProps = {
  name: ICalendar['name']
}

export const CalendarBody: React.FC<CalendarBodyProps> = ({ name }) => {
  return (
    <div className={calendarBodyClasses.calendarBodyStyle} data-testid="calendar-body">
      <CalendarWeekDay />
      <CalendarDays name={name} />
    </div>
  )
}
