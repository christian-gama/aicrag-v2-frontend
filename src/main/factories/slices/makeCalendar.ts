import { makeCalendarSlice } from '@/infra/store/calendar'

export const createTaskCalendarSlice = makeCalendarSlice('createTaskCalendar')
export const updateTaskCalendarSlice = makeCalendarSlice('updateTaskCalendar')
