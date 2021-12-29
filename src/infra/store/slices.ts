import { makeCalendarSlice } from './calendar'
import { makeFormSlice } from './form'

// New slices are added here
export const slices = {
  createTaskCalendar: makeCalendarSlice('createTaskCalendar'),
  updateTaskCalendar: makeCalendarSlice('updateTaskCalendar'),
  createTaskForm: makeFormSlice('createTaskForm'),
  updateTaskForm: makeFormSlice('updateTaskForm')
}

export type Slices = keyof typeof slices
