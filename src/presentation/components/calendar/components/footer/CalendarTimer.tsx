import getFormattedTime from '@/utils/getFormattedTime'
import timerIncreaser from '@/utils/timerIncreaser'
import { DateTime } from 'luxon'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import validateHour from '@/application/validators/tasks/validateHour'
import validateMinute from '@/application/validators/tasks/validateMinute'
import { AppDispatch, RootState } from '@/infra/store'
import { setSelectedDate } from '@/infra/store/calendar'
import ClockIcon from '../../../UI/icons/clockIcon/ClockIcon'
import { calendarTimerClasses } from './CalendarTimer.css'

const CalendarTimer: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const selectedDate = useSelector<RootState, number>((state) => state.calendar.selectedDate)

  const [hours, setHours] = useState(getFormattedTime(DateTime.fromMillis(selectedDate).hour))
  const [minutes, setMinutes] = useState(getFormattedTime(DateTime.fromMillis(selectedDate).minute))

  useEffect(() => {
    const transformedTime = DateTime.fromMillis(selectedDate)
      .set({ hour: +hours })
      .set({ minute: +minutes })
      .toMillis()

    dispatch(setSelectedDate(transformedTime))
  }, [hours, minutes, selectedDate])

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target

    switch (name) {
      case 'calendar-hour':
        return !validateHour(value) ? setHours(value) : undefined

      case 'calendar-minute':
        return !validateMinute(value) ? setMinutes(value) : undefined
    }
  }

  const blurHandler = (event: React.FocusEvent<HTMLInputElement>): void => {
    const { value, name } = event.target

    switch (name) {
      case 'calendar-hour':
        return setHours(getFormattedTime(+value))

      case 'calendar-minute':
        return setMinutes(getFormattedTime(+value))
    }
  }

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    const { name } = event.currentTarget

    switch (event.key) {
      case 'ArrowUp':
        return name === 'calendar-hour'
          ? setHours((prevHours) => timerIncreaser({ increase: true, prevTime: prevHours, type: 'hour' }))
          : setMinutes((prevMinutes) => timerIncreaser({ increase: true, prevTime: prevMinutes, type: 'minute' }))

      case 'ArrowDown':
        return name === 'calendar-hour'
          ? setHours((prevHours) => timerIncreaser({ increase: false, prevTime: prevHours, type: 'hour' }))
          : setMinutes((prevMinutes) => timerIncreaser({ increase: false, prevTime: prevMinutes, type: 'minute' }))
    }
  }

  return (
    <div className={calendarTimerClasses.calendarTimerContainerStyle} data-testid="calendar-timer">
      <label htmlFor="calendar-hour" className={calendarTimerClasses.calendarTimerLabel}>
        <ClockIcon />
      </label>

      <div className={calendarTimerClasses.calendarTimerContentStyle}>
        <input
          className={calendarTimerClasses.calendarTimerHourStyle}
          data-testid="calendar-hour"
          id="calendar-hour"
          name="calendar-hour"
          onBlur={blurHandler}
          onChange={changeHandler}
          onKeyDown={keyDownHandler}
          type="text"
          value={hours}
        />
        <input
          className={calendarTimerClasses.calendarTimerHourStyle}
          data-testid="calendar-minute"
          id="calendar-minute"
          name="calendar-minute"
          onBlur={blurHandler}
          onChange={changeHandler}
          onKeyDown={keyDownHandler}
          type="text"
          value={minutes}
        />
      </div>
    </div>
  )
}

export default CalendarTimer
