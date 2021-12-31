import React from 'react'
import { calendarDayClasses } from './CalendarDayNumber.css'
import CalendarDayNumberProps from './CalendarDayNumber.model'

const CalendarDayNumber: React.FC<CalendarDayNumberProps> = (props) => {
  const { dimmed, onClick, selected, testid, dayNumber } = props

  const calendarDayStyle = calendarDayClasses.calendarDayRecipe({
    selected: !!selected,
    dimmed: !!dimmed
  })

  return (
    <span
      data-testid={testid ?? ''}
      className={calendarDayStyle}
      data-selected={selected}
      onClick={() => {
        if (onClick && !dimmed) {
          onClick(dayNumber)
        }
      }}
    >
      {dayNumber}
    </span>
  )
}

export default CalendarDayNumber
