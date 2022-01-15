import React from 'react'
import * as style from './stylesheet'

type CalendarTimerInputProps = {
  name: 'hour' | 'minute'
  value: string
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const CalendarTimerInput: React.FC<CalendarTimerInputProps> = (props) => {
  return (
    <input
      className={style.calendarTimerInput}
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
