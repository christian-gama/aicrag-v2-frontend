import React from 'react'
import * as style from './stylesheet'

type CalendarTimerInputProps = {
  name: 'hour' | 'minute'
  value: string
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const CalendarTimerInput: React.FC<CalendarTimerInputProps> = ({
  name,
  onBlur,
  onChange,
  onKeyDown,
  value
}) => {
  return (
    <input
      className={style.calendarTimerInput}
      data-testid={`calendar-${name}`}
      id={`calendar-${name}`}
      name={`calendar-${name}`}
      onBlur={onBlur}
      onChange={onChange}
      onKeyDown={onKeyDown}
      type="text"
      value={value}
    />
  )
}

export default CalendarTimerInput
