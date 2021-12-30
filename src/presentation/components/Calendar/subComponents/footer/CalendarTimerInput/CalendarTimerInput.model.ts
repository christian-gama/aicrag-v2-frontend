type CalendarTimerInputProps = {
  name: 'hour' | 'minute'
  value: string
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

export default CalendarTimerInputProps
