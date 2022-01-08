import React from 'react'
import * as style from './stylesheet'

const CalendarWeekday: React.FC = () => {
  const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

  return (
    <>
      {weekdays.map((weekday) => (
        <span key={weekday} className={style.weekday}>
          {weekday}
        </span>
      ))}
    </>
  )
}

export default CalendarWeekday
