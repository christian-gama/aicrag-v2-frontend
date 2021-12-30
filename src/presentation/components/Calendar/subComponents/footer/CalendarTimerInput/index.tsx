import React from 'react'
import { calendarTimerInputClasses } from './CalendarTimerInput.css'
import CalendarTimerInputProps from './CalendarTimerInput.model'

const CalendarTimerInput: React.FC<CalendarTimerInputProps> = (props) => {
  return (
    <input
      className={calendarTimerInputClasses.inputStyle}
      data-testid={`calendar-${props.name}`}
      id={`calendar-${props.name}`}
      name={`calendar-${props.name}`}
      onBlur={props.onBlur}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
      type="text"
      value={props.value}
    />
  )
}

export default CalendarTimerInput
