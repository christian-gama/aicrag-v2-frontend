import IValidation from '@/domain/validation/validation.model'
import { calendarActions } from '../../application/models/calendar'

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
