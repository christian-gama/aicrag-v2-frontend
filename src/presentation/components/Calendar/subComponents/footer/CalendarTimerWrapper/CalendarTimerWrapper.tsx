import React from 'react'
import ClockIcon from '@/presentation/components/UI/icons/ClockIcon'
import CalendarTimerWrapperProps from './CalendarTimerWrapper.model'
import * as style from './stylesheet'

const CalendarTimerWrapper: React.FC<CalendarTimerWrapperProps> = (props) => {
  const { render } = props

  return (
    <div className={style.timerWrapper} data-testid="calendar-timer">
      <label htmlFor="calendar-hour" className={style.timerLabel}>
        <ClockIcon />
      </label>

      <div className={style.timerContent}>{render()}</div>
    </div>
  )
}

export default CalendarTimerWrapper
