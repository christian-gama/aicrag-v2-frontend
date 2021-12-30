import React from 'react'
import { calendarDayClasses } from './CalendarDayNumber.css'
import CalendarDayNumberProps from './CalendarDayNumber.model'
import onClickHandler from './handlers/onClickHandler'

const CalendarDayNumber: React.FC<CalendarDayNumberProps> = (props) => {
  const calendarDayStyle = calendarDayClasses.calendarDayRecipe({
    selected: !!props.selected,
    dimmed: !!props.dimmed
  })

  return (
    <span
      data-testid={props.testid ?? ''}
      className={calendarDayStyle}
      onClick={() => onClickHandler(props, { dayNumber: props.children as number })}
      data-selected={props.selected}
    >
      {props.children}
    </span>
  )
}

export default CalendarDayNumber
