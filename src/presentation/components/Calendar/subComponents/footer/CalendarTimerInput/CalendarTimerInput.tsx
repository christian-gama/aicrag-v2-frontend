import React from 'react'
import CalendarTimerInputProps from './CalendarTimerInput.model'
import * as style from './stylesheet'

export const CalendarTimerInput: React.FC<CalendarTimerInputProps> = (props) => {
  return (
    <input
      className={style.timerInput}
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
