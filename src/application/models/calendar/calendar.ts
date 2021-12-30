import { createSlice } from '@reduxjs/toolkit'
import { DateTime } from 'luxon'
import { ICalendar } from './protocols/calendar.model'

const initialCalendarState: ICalendar['states'] = {
  selectedDate: DateTime.now().toMillis(),
  calendarDate: DateTime.now().toMillis(),
  previousDate: DateTime.now().toMillis(),
  isCalendarOpen: false
}

export const makeCalendarSlice = <T extends ICalendar['name']>(name: T) => {
  return createSlice({
    name: name,
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

      saveCalendar: (state, action: ICalendar['payloads']['millis']) => {
        state.selectedDate = action.payload
        state.calendarDate = action.payload
        state.previousDate = action.payload
      },

      setCalendarDate: (state, action: ICalendar['payloads']['millis']) => {
        state.calendarDate = action.payload
      },

      setPreviousDate: (state, action: ICalendar['payloads']['millis']) => {
        state.previousDate = action.payload
      },

      setSelectedDate: (state, action: ICalendar['payloads']['millis']) => {
        state.selectedDate = action.payload
      }
    }
  })
}
