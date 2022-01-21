import { DateTime } from 'luxon'
import { useDispatch, useSelector } from 'react-redux'
import { calendarActions } from '@/context/models/calendar/calendar.actions'
import { CalendarStates } from '@/context/models/calendar/protocols/calendar.model'
import { AppDispatch, RootState } from '@/context/store'

const useCalendarDays = () => {
  const dispatch = useDispatch<AppDispatch>()
  const calendarDate = useSelector<RootState, CalendarStates['calendarDate']>(
    (state) => state.calendar.calendarDate
  )
  const selectedDate = useSelector<RootState, CalendarStates['selectedDate']>(
    (state) => state.calendar.selectedDate
  )

  const startDate = DateTime.fromMillis(calendarDate).startOf('month')

  const shouldDayBeDimmed = (date: DateTime, day: number, week: number) => {
    const isDayFromPreviousMonth = week === 1 && day <= startDate.weekday
    const isDayFromNextMonth =
      date.month !== DateTime.fromMillis(calendarDate).month
    const result = isDayFromPreviousMonth || isDayFromNextMonth

    return result
  }

  const isDaySelected = (date: DateTime) => {
    return (
      date.year === DateTime.fromMillis(selectedDate).year &&
      date.month === DateTime.fromMillis(selectedDate).month &&
      date.day === DateTime.fromMillis(selectedDate).day
    )
  }

  const pickDateHandler = (day: DateTime['day']) => {
    const pickedDate = DateTime.fromMillis(calendarDate)
      .set({ day: day })
      .toMillis()

    dispatch(calendarActions.setSelectedDate(pickedDate))
  }

  return {
    isDaySelected,
    pickDateHandler,
    shouldDayBeDimmed,
    startDate
  }
}

export default useCalendarDays
