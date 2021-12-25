import { createSlice } from '@reduxjs/toolkit'
import { DateTime } from 'luxon'
import ICalendar from './protocols/calendar.model'

type Action = {
  payload: number
}

const initialCalendarState: ICalendar = {
  selectedDate: DateTime.now().toMillis(),
  calendarDate: DateTime.now().toMillis()
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: initialCalendarState,
  reducers: {
    setSelectedDate: (state, action: Action) => {
      state.selectedDate = action.payload
    },
    setCalendarDate: (state, action) => {
      state.calendarDate = action.payload
    }
  }
})

export const { setSelectedDate, setCalendarDate } = calendarSlice.actions

export default calendarSlice.reducer
