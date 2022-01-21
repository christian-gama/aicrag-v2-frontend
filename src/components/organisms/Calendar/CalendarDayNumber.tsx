import React from 'react'
import * as style from './stylesheet'
import { CalendarDayNumberVariants } from './stylesheet'

type CalendarDayNumberProps = {
  dayNumber: number
  dimmed?: CalendarDayNumberVariants['dimmed']
  selected?: CalendarDayNumberVariants['selected']
  testid?: string
  onClick?: (dayNumber: number) => void
}

const CalendarDayNumber: React.FC<CalendarDayNumberProps> = ({
  dimmed,
  onClick,
  selected,
  testid,
  dayNumber
}) => {
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
