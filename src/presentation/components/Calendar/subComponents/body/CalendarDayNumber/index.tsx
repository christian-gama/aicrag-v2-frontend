import React from 'react'
import CalendarDayNumberProps from './CalendarDayNumber.model'
import { dayRecipe } from './stylesheet'

const CalendarDayNumber: React.FC<CalendarDayNumberProps> = (props) => {
  const { dimmed, onClick, selected, testid, dayNumber } = props

  const calendarDayStyle = dayRecipe({
    selected: !!selected,
    dimmed: !!dimmed
  })

  return (
    <span
      data-testid={testid}
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
