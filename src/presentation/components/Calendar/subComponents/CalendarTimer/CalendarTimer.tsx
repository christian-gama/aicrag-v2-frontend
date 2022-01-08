import { DateTime } from 'luxon'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calendarActions } from '@/application/models/redux/calendar'
import { CalendarStates } from '@/application/models/redux/calendar/protocols/calendar.model'
import { AppDispatch, RootState } from '@/application/store'
import getFormattedTime from '@/application/utils/getFormattedTime'
import ClockIcon from '@/presentation/components/UI/icons/ClockIcon'
import makeTimerValidator from '@/main/factories/validation/makeTimerValidator'
import CalendarTimerInput from '../CalendarTimerInput'
import onBlurHandler from './methods/onBlurHandler'
import onChangeHandler from './methods/onChangeHandler'
import onKeyDownHandler from './methods/onKeyDownHandler'
import * as style from './stylesheet'

const CalendarTimer: React.FC = () => {
  const { setSelectedDate } = calendarActions
  const validation = makeTimerValidator()

  const dispatch = useDispatch<AppDispatch>()
  const selectedDate = useSelector<RootState, CalendarStates['selectedDate']>((state) => state.calendar.selectedDate)

  const [hours, setHours] = useState(getFormattedTime(DateTime.fromMillis(selectedDate).hour))
  const [minutes, setMinutes] = useState(getFormattedTime(DateTime.fromMillis(selectedDate).minute))

  useEffect(() => {
    const transformedTime = DateTime.fromMillis(selectedDate)
      .set({ hour: +hours })
      .set({ minute: +minutes })
      .toMillis()

    dispatch(setSelectedDate(transformedTime))
  }, [hours, minutes, selectedDate])

  return (
    <div className={style.timer} data-testid="calendar-timer">
      <label htmlFor="calendar-hour" className={style.timerLabel}>
        <ClockIcon />
      </label>

      <div className={style.timerContent}>
        {
          <>
            <CalendarTimerInput
              name="hour"
              onBlur={(event) => onBlurHandler({ event, setHours, setMinutes })}
              onChange={(event) => onChangeHandler({ event, setHours, setMinutes, validation })}
              onKeyDown={(event) => onKeyDownHandler({ event, setHours, setMinutes })}
              value={hours}
            />

            <CalendarTimerInput
              name="minute"
              onBlur={(event) => onBlurHandler({ event, setHours, setMinutes })}
              onChange={(event) => onChangeHandler({ event, setHours, setMinutes, validation })}
              onKeyDown={(event) => onKeyDownHandler({ event, setHours, setMinutes })}
              value={minutes}
            />
          </>
        }
      </div>
    </div>
  )
}

export default CalendarTimer
