import React from 'react'
import * as style from './stylesheet'
import { CalendarDayNumberVariants } from './stylesheet'

type CalendarDayNumberProps = {
  selected?: CalendarDayNumberVariants['selected']
  dimmed?: CalendarDayNumberVariants['dimmed']
  onClick?: (dayNumber: number) => void
  dayNumber: number
  testid?: string
}

const CalendarDayNumber: React.FC<CalendarDayNumberProps> = ({
  dayNumber,
  selected,
  onClick,
  dimmed,
  testid
}) => {
  return (
    <span
      className={style.calendarDayNumberRecipe({
        selected: !!selected,
        dimmed: !!dimmed
      })}
      onClick={() => {
        if (onClick && !dimmed) {
          onClick(dayNumber)
        }
      }}
      data-selected={selected}
      data-testid={testid}
    >
      {dayNumber}
    </span>
  )
}

export default CalendarDayNumber
