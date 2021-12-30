import { DateTime } from 'luxon'
import { Dispatch } from 'redux'
import IHandler from '@/domain/handler/handler.model'
import { CalendarActions, CalendarStates } from '@/application/models/calendar/protocols/calendar.model'

type Params = {
  calendarDate: CalendarStates['calendarDate']
  dispatch: Dispatch<any>
  day: number
  setSelectedDate: CalendarActions['setSelectedDate']
}

const pickDateHandler: IHandler<Params> = ({ calendarDate, day, dispatch, setSelectedDate }) => {
  const pickedDate = DateTime.fromMillis(calendarDate).set({ day: day }).toMillis()

  dispatch(setSelectedDate(pickedDate))
}

export default pickDateHandler
