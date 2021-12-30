import { DateTime } from 'luxon'
import { Dispatch } from 'redux'
import IHandler from '@/domain/handler/handler.model'
import { ICalendar } from '@/application/models/calendar'
import CalendarDaysProps from '../CalendarDays.model'

type States = {
  calendarDate: ICalendar['states']['calendarDate']
  dispatch: Dispatch<any>
  day: number
  setSelectedDate: ICalendar['actions']['setSelectedDate']
}

const pickDateHandler: IHandler<CalendarDaysProps, States> = (_, states) => {
  const pickedDate = DateTime.fromMillis(states.calendarDate).set({ day: states.day }).toMillis()

  states.dispatch(states.setSelectedDate(pickedDate))
}

export default pickDateHandler
