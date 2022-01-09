import { calendarActions } from '..'

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
