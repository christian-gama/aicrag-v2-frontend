import { createSlice } from '@reduxjs/toolkit'
import { DateTime } from 'luxon'
import ICalendar from './protocols/calendar.model'

type Action = {
  payload: number
}

const initialCalendarState: ICalendar = {
  selectedDate: DateTime.now().toMillis(),
  calendarDate: DateTime.now().toMillis(),
  previousDate: DateTime.now().toMillis(),
  isCalendarOpen: false
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
    saveCalendar: (state, action: Action) => {
      state.selectedDate = action.payload
      state.calendarDate = action.payload
      state.previousDate = action.payload
    },
    setCalendarDate: (state, action: Action) => {
      state.calendarDate = action.payload
    },
    setPreviousDate: (state, action: Action) => {
      state.previousDate = action.payload
    },
    setSelectedDate: (state, action: Action) => {
      state.selectedDate = action.payload
    }
  }
})

export const {
  closeCalendar,
  openCalendar,
  resetCalendar,
  saveCalendar,
  setCalendarDate,
  setPreviousDate,
  setSelectedDate
} = calendarSlice.actions

export default calendarSlice.reducer
