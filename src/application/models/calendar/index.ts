import { createSlice } from '@reduxjs/toolkit'
import { DateTime } from 'luxon'
import makeTimerValidator from '@/main/factories/validation/makeTimerValidator'
import { CalendarPayloads, CalendarStates } from './protocols/calendar.model'

const initialCalendarState: CalendarStates = {
  isCalendarOpen: false,
  validation: makeTimerValidator(),
  selectedDate: DateTime.now().toMillis(),
  calendarDate: DateTime.now().toMillis(),
  previousDate: DateTime.now().toMillis()
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: initialCalendarState,
  reducers: {
    closeCalendar: (state) => {
      state.isCalendarOpen = false
    },

    openCalendar: (state) => {
      state.isCalendarOpen = true
    },

    resetCalendar: (state) => {
      state.selectedDate = state.previousDate
      state.calendarDate = state.previousDate
    },

    saveCalendar: (state, action: CalendarPayloads) => {
      state.selectedDate = action.payload
      state.calendarDate = action.payload
      state.previousDate = action.payload
    },

    setCalendarDate: (state, action: CalendarPayloads) => {
      state.calendarDate = action.payload
    },

    setPreviousDate: (state, action: CalendarPayloads) => {
      state.previousDate = action.payload
    },

    setSelectedDate: (state, action: CalendarPayloads) => {
      state.selectedDate = action.payload
    }
  }
})

export const calendarActions = calendarSlice.actions
export const calendarReducer = calendarSlice.reducer
