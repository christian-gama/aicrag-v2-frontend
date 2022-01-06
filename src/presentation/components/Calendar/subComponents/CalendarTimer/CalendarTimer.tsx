import React from 'react'
import ClockIcon from '@/presentation/components/UI/icons/ClockIcon'
import CalendarTimerProps from './CalendarTimer.model'
import * as style from './stylesheet'

const CalendarTimer: React.FC<CalendarTimerProps> = (props) => {
  const { render } = props

  return (
    <div className={style.timer} data-testid="calendar-timer">
      <label htmlFor="calendar-hour" className={style.timerLabel}>
        <ClockIcon />
      </label>

      <div className={style.timerContent}>{render()}</div>
    </div>
  )
}

export default CalendarTimer
