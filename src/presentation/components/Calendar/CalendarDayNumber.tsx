import React from 'react'
import CalendarDayNumberProps from './protocols/CalendarDayNumber.model'
import * as style from './stylesheet'

const CalendarDayNumber: React.FC<CalendarDayNumberProps> = (props) => {
  const { dimmed, onClick, selected, testid, dayNumber } = props

  return (
    <span
      data-testid={testid}
      className={style.calendarDayNumberRecipe({
        selected: !!selected,
        dimmed: !!dimmed
      })}
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
