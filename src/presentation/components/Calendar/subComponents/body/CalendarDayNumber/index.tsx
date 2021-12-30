import React from 'react'
import { calendarDayClasses } from './CalendarDayNumber.css'
import CalendarDayNumberProps from './CalendarDayNumber.model'
import onClickHandler from './methods/onClickHandler'

const CalendarDayNumber: React.FC<CalendarDayNumberProps> = (props) => {
  const calendarDayStyle = calendarDayClasses.calendarDayRecipe({
    selected: !!props.selected,
    dimmed: !!props.dimmed
  })

  return (
    <span
      data-testid={props.testid ?? ''}
      className={calendarDayStyle}
      onClick={() =>
        onClickHandler({ dayNumber: props.children as number, dimmed: props.dimmed, onClick: props.onClick })
      }
      data-selected={props.selected}
    >
      {props.children}
    </span>
  )
}

export default CalendarDayNumber
