import React from 'react'
import ClockIcon from '../../../icons/clockIcon/ClockIcon'
import { calendarTimerClasses } from './CalendarTimer.css'

const CalendarTimer: React.FC = () => {
  return (
    <div className={calendarTimerClasses.calendarTimerContainerStyle}>
      <label htmlFor="calendar-hour" className={calendarTimerClasses.calendarTimerLabel}>
        <ClockIcon />
      </label>

      <div className={calendarTimerClasses.calendarTimerContentStyle}>
        <input
          name="calendar-hour"
          id="calendar-hour"
          type="text"
          defaultValue="18"
          maxLength={2}
          className={calendarTimerClasses.calendarTimerHourStyle}
        />
        <input
          name="calendar-minute"
          id="calendar-minute"
          type="text"
          defaultValue="00"
          maxLength={2}
          className={calendarTimerClasses.calendarTimerHourStyle}
        />
      </div>
    </div>
  )
}

export default CalendarTimer
