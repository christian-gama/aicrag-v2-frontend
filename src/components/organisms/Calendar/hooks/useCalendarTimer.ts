import { DateTime } from 'luxon'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFormattedTime, timerIncreaser } from '@/helpers'
import { calendarActions, CalendarStates } from '@/context/models/calendar'
import { AppDispatch, RootState } from '@/context/store'
import { makeTimerValidator } from '@/external/factories/validation'

export const useCalendarTimer = () => {
  const { setSelectedDate } = calendarActions
  const validation = makeTimerValidator()

  const dispatch = useDispatch<AppDispatch>()
  const selectedDate = useSelector<RootState, CalendarStates['selectedDate']>(
    (state) => state.calendar.selectedDate
  )

  const [hours, setHours] = useState(
    getFormattedTime(DateTime.fromMillis(selectedDate).hour)
  )
  const [minutes, setMinutes] = useState(
    getFormattedTime(DateTime.fromMillis(selectedDate).minute)
  )

  useEffect(() => {
    const transformedTime = DateTime.fromMillis(selectedDate)
      .set({ hour: +hours })
      .set({ minute: +minutes })
      .toMillis()

    dispatch(setSelectedDate(transformedTime))
  }, [hours, minutes, selectedDate])

  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    const { value, name } = event.target

    switch (name) {
      case 'calendar-hour':
        return setHours(getFormattedTime(+value))

      case 'calendar-minute':
        return setMinutes(getFormattedTime(+value))
    }
  }

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    switch (name) {
      case 'calendar-hour':
        return !validation.validate('hour', { hour: value })
          ? setHours(value)
          : undefined

      case 'calendar-minute':
        return !validation.validate('minute', { minute: value })
          ? setMinutes(value)
          : undefined
    }
  }

  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { name } = event.currentTarget

    switch (event.key) {
      case 'ArrowUp':
        return name === 'calendar-hour'
          ? setHours((prevHours) =>
            timerIncreaser({
              prevTime: prevHours,
              increase: true,
              type: 'hour'
            })
          )
          : setMinutes((prevMinutes) =>
            timerIncreaser({
              prevTime: prevMinutes,
              increase: true,
              type: 'minute'
            })
          )

      case 'ArrowDown':
        return name === 'calendar-hour'
          ? setHours((prevHours) =>
            timerIncreaser({
              prevTime: prevHours,
              increase: false,
              type: 'hour'
            })
          )
          : setMinutes((prevMinutes) =>
            timerIncreaser({
              prevTime: prevMinutes,
              increase: false,
              type: 'minute'
            })
          )
    }
  }

  return {
    onKeyDownHandler,
    onChangeHandler,
    onBlurHandler,
    minutes,
    hours
  }
}
