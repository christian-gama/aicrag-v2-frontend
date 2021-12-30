import IValidation from '@/domain/validation/validation.model'
import { calendarActions } from '..'

export type CalendarStates = {
  calendarDate: number
  isCalendarOpen: boolean
  previousDate: number
  selectedDate: number
  validation: IValidation
}

export type CalendarActions = typeof calendarActions

export type CalendarPayloads = {
  payload: number
}
