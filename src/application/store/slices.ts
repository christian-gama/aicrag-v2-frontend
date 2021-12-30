import { makeCalendarSlice } from '../models/calendar'
import { makeFormSlice } from '../models/form'

// New slices are added here
export const slices = {
  createTaskCalendar: makeCalendarSlice('createTaskCalendar'),
  updateTaskCalendar: makeCalendarSlice('updateTaskCalendar'),
  createTaskForm: makeFormSlice('createTaskForm'),
  updateTaskForm: makeFormSlice('updateTaskForm')
}

export type Slices = keyof typeof slices
