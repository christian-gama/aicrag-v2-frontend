import { ClockIcon } from '@/components/utils/icons'
import { CalendarTimerInput } from './CalendarTimerInput'
import { useCalendarTimer } from './hooks'
import * as classes from './stylesheet'

export const CalendarTimer: React.FC = () => {
  const { hours, minutes, onBlurHandler, onChangeHandler, onKeyDownHandler } =
    useCalendarTimer()

  return (
    <div className={classes.calendarTimer} data-testid="calendar-timer">
      <label htmlFor="calendar-hour" className={classes.calendarTimerLabel}>
        <ClockIcon />
      </label>

      <div className={classes.calendarTimerContent}>
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
