import React from 'react'
import ClockIcon from '../../atoms/icons/ClockIcon'
import CalendarTimerInput from './CalendarTimerInput'
import useCalendarTimer from './hooks/useCalendarTimer'
import * as style from './stylesheet'

const CalendarTimer: React.FC = () => {
  const { hours, minutes, onBlurHandler, onChangeHandler, onKeyDownHandler } = useCalendarTimer()

  return (
    <div className={style.calendarTimer} data-testid="calendar-timer">
      <label htmlFor="calendar-hour" className={style.calendarTimerLabel}>
        <ClockIcon />
      </label>

      <div className={style.calendarTimerContent}>
        {
          <>
            <CalendarTimerInput
              name="hour"
              onBlur={(event) => onBlurHandler(event)}
              onChange={(event) => onChangeHandler(event)}
              onKeyDown={(event) => onKeyDownHandler(event)}
              value={hours}
            />

            <CalendarTimerInput
              name="minute"
              onBlur={(event) => onBlurHandler(event)}
              onChange={(event) => onChangeHandler(event)}
              onKeyDown={(event) => onKeyDownHandler(event)}
              value={minutes}
            />
          </>
        }
      </div>
    </div>
  )
}

export default CalendarTimer
