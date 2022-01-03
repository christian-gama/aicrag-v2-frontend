import React from 'react'
import ClockIcon from '@/presentation/components/UI/icons/ClockIcon'
import CalendarTimerWrapperProps from './CalendarTimerWrapper.model'
import { calendarTimerClasses } from './stylesheet/CalendarTimerWrapper.css'

const CalendarTimerWrapper: React.FC<CalendarTimerWrapperProps> = (props) => {
  const { render } = props

  return (
    <div className={calendarTimerClasses.wrapperStyle} data-testid="calendar-timer">
      <label htmlFor="calendar-hour" className={calendarTimerClasses.timerLabel}>
        <ClockIcon />
      </label>

      <div className={calendarTimerClasses.contentStyle}>{render()}</div>
    </div>
  )
}

export default CalendarTimerWrapper
