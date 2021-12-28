import { makeCalendarSlice } from '../calendar'

type CalendarStates = {
  calendarDate: number
  isCalendarOpen: boolean
  previousDate: number
  selectedDate: number
}

type CalendarNames = 'createTaskCalendar' | 'updateTaskCalendar'

type CalendarMillisPayload = {
  payload: number
}

type CalendarActions = ReturnType<typeof makeCalendarSlice>['actions']

export type ICalendar = {
  actions: CalendarActions
  name: CalendarNames
  reducer: ReturnType<typeof makeCalendarSlice>['reducer']
  states: CalendarStates
  payloads: {
    millis: CalendarMillisPayload
  }
}
