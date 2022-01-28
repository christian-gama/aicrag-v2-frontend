import React from 'react'
import ClockIcon from '../../utils/icons/ClockIcon'
import CalendarTimerInput from './CalendarTimerInput'
import useCalendarTimer from './hooks/useCalendarTimer'
import * as style from './stylesheet'

const CalendarTimer: React.FC = () => {
  const { hours, minutes, onBlurHandler, onChangeHandler, onKeyDownHandler } =
    useCalendarTimer()

  return (
    <div className={style.calendarTimer} data-testid="calendar-timer">
      <label htmlFor="calendar-hour" className={style.calendarTimerLabel}>
        <ClockIcon />
      </label>

      <div className={style.calendarTimerContent}>
        {
          <>
            <CalendarTimerInput
              onKeyDown={(event) => onKeyDownHandler(event)}
              onChange={(event) => onChangeHandler(event)}
              onBlur={(event) => onBlurHandler(event)}
              value={hours}
              name="hour"
            />

            <CalendarTimerInput
              onKeyDown={(event) => onKeyDownHandler(event)}
              onChange={(event) => onChangeHandler(event)}
              onBlur={(event) => onBlurHandler(event)}
              value={minutes}
              name="minute"
            />
          </>
        }
      </div>
    </div>
  )
}

export default CalendarTimer
