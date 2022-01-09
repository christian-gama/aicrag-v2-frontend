import { useDispatch, useSelector } from 'react-redux'
import { calendarActions } from '@/context/models/calendar'
import { CalendarStates } from '@/context/models/calendar/protocols/calendar.model'
import { AppDispatch, RootState } from '@/context/store'

const useCalendarFooter = () => {
  const { closeCalendar, saveCalendar, resetCalendar } = calendarActions

  const dispatch = useDispatch<AppDispatch>()
  const selectedDate = useSelector<RootState, CalendarStates['selectedDate']>((state) => state.calendar.selectedDate)
  const previousDate = useSelector<RootState, CalendarStates['previousDate']>((state) => state.calendar.previousDate)

  const onCancelHandler = (): void => {
    dispatch(resetCalendar(previousDate))
    dispatch(closeCalendar())
  }

  const onConfirmHandler = () => {
    dispatch(saveCalendar(selectedDate))
    dispatch(closeCalendar())
  }

  return {
    onCancelHandler,
    onConfirmHandler
  }
}

export default useCalendarFooter
