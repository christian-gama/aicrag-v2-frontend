import React from 'react'
import calendarWeekDayStyle from './CalendarWeekDay.css'

const CalendarWeekDay: React.FC = () => {
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

  return (
    <>
      {weekDays.map((weekDay) => (
        <span key={weekDay} className={calendarWeekDayStyle}>
          {weekDay}
        </span>
      ))}
    </>
  )
}

export default CalendarWeekDay
