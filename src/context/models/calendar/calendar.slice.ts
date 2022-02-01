import { createSlice } from '@reduxjs/toolkit'
import { DateTime } from 'luxon'
import { CalendarPayloads, CalendarStates } from './protocols/calendar.model'

const initialCalendarState: CalendarStates = {
  isCalendarOpen: false,
  selectedDate: DateTime.now().toMillis(),
  calendarDate: DateTime.now().toMillis(),
  previousDate: DateTime.now().toMillis()
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: initialCalendarState,
  reducers: {
    resetCalendar: (state, action: CalendarPayloads) => {
      state.selectedDate = action.payload
      state.calendarDate = action.payload
      state.previousDate = action.payload
    },

    closeCalendar: (state) => {
      state.isCalendarOpen = false
    },

    openCalendar: (state) => {
      state.isCalendarOpen = true
    },

    saveCalendar: (state, action: CalendarPayloads) => {
      state.selectedDate = action.payload
      state.calendarDate = action.payload
      state.previousDate = action.payload
    },

    setCalendarDate: (state, action: CalendarPayloads) => {
      state.calendarDate = action.payload
    },

    setSelectedDate: (state, action: CalendarPayloads) => {
      state.selectedDate = action.payload
    }
  }
})
