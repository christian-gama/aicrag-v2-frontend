import { calendarActions } from '../calendar.actions'

export type CalendarStates = {
  calendarDate: number
  isCalendarOpen: boolean
  previousDate: number
  selectedDate: number
}

export type CalendarActions = typeof calendarActions

export type CalendarPayloads = {
  payload: number
}
