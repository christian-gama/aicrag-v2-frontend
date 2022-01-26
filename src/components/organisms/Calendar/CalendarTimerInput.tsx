import React from 'react'
import * as style from './stylesheet'

type CalendarTimerInputProps = {
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  name: 'hour' | 'minute'
  value: string
}

const CalendarTimerInput: React.FC<CalendarTimerInputProps> = ({
  onKeyDown,
  onChange,
  onBlur,
  value,
  name
}) => {
  return (
    <input
      className={style.calendarTimerInput}
      data-testid={`calendar-${name}`}
      name={`calendar-${name}`}
      id={`calendar-${name}`}
      onKeyDown={onKeyDown}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      type="text"
    />
  )
}

export default CalendarTimerInput
