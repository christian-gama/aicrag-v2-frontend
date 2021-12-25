import React from 'react'
import { calendarDayClasses, CalendarDayVariants } from './CalendarDayNumber.css'

type CalendarDayProps = {
  onClick?: (day: number) => void
  dimmed?: CalendarDayVariants['dimmed']
  selected?: CalendarDayVariants['selected']
  testid?: string
}

const CalendarDayNumber: React.FC<CalendarDayProps> = ({ testid, onClick, dimmed, selected, children }) => {
  const calendarDayStyle = calendarDayClasses.calendarDayRecipe({
    selected: !!selected,
    dimmed: !!dimmed
  })

  const handleClick = (): void => {
    if (onClick && !dimmed) {
      onClick(Number(children))
    }
  }

  return (
    <span data-testid={testid ?? ''} className={calendarDayStyle} onClick={handleClick}>
      {children}
    </span>
  )
}

export default CalendarDayNumber
