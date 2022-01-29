import { useDispatch, useSelector } from 'react-redux'
import { calendarActions, CalendarStates } from '@/context/models/calendar'
import { AppDispatch, RootState } from '@/context/store'

export const useCalendarFooter = () => {
  const { closeCalendar, saveCalendar, resetCalendar } = calendarActions

  const dispatch = useDispatch<AppDispatch>()
  const { selectedDate, previousDate } = useSelector<RootState, CalendarStates>(
    (state) => state.calendar
  )

  const onCancelHandler = (): void => {
    dispatch(resetCalendar(previousDate))
    dispatch(closeCalendar())
  }

  const onConfirmHandler = () => {
    dispatch(saveCalendar(selectedDate))
    dispatch(closeCalendar())
  }

  return {
    onConfirmHandler,
    onCancelHandler
  }
}
