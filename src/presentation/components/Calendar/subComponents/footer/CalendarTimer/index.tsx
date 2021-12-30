import { DateTime } from 'luxon'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { makeActions } from '@/application/plugins/makeActions'
import { AppDispatch, RootState } from '@/application/store'
import getFormattedTime from '@/application/utils/getFormattedTime'
import ClockIcon from '../../../../UI/icons/ClockIcon'
import CalendarTimerInput from '../CalendarTimerInput'
import { calendarTimerClasses } from './CalendarTimer.css'
import CalendarTimerProps from './CalendarTimer.model'
import onBlurHandler from './handlers/onBlurHandler'
import onChangeHandler from './handlers/onChangeHandler'
import onKeyDownHandler from './handlers/onKeyDownHandler'

const CalendarTimer: React.FC<CalendarTimerProps> = (props) => {
  const { setSelectedDate } = makeActions(props.name)

  const dispatch = useDispatch<AppDispatch>()
  const selectedDate = useSelector<RootState, number>((state) => state[props.name].selectedDate)

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
    <div className={calendarTimerClasses.calendarTimerContainerStyle} data-testid="calendar-timer">
      <label htmlFor="calendar-hour" className={calendarTimerClasses.calendarTimerLabel}>
        <ClockIcon />
      </label>

      <div className={calendarTimerClasses.calendarTimerContentStyle}>
        <CalendarTimerInput
          name="hour"
          onBlur={(event) => onBlurHandler(props, { event, setHours, setMinutes })}
          onChange={(event) => onChangeHandler(props, { event, setHours, setMinutes })}
          onKeyDown={(event) => onKeyDownHandler(props, { event, setHours, setMinutes })}
          value={hours}
        />

        <CalendarTimerInput
          name="minute"
          onBlur={(event) => onBlurHandler(props, { event, setHours, setMinutes })}
          onChange={(event) => onChangeHandler(props, { event, setHours, setMinutes })}
          onKeyDown={(event) => onKeyDownHandler(props, { event, setHours, setMinutes })}
          value={minutes}
        />
      </div>
    </div>
  )
}

export default CalendarTimer
