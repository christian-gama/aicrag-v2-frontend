import React from 'react'
import ClockIcon from '@/presentation/components/UI/icons/ClockIcon'
import CalendarTimerWrapperProps from './CalendarTimerWrapper.model'
import { wrapperStyle, timerLabelStyle, contentStyle } from './stylesheet'

const CalendarTimerWrapper: React.FC<CalendarTimerWrapperProps> = (props) => {
  const { render } = props

  return (
    <div className={wrapperStyle} data-testid="calendar-timer">
      <label htmlFor="calendar-hour" className={timerLabelStyle}>
        <ClockIcon />
      </label>

      <div className={contentStyle}>{render()}</div>
    </div>
  )
}

export default CalendarTimerWrapper
