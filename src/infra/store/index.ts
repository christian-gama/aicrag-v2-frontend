import { configureStore } from '@reduxjs/toolkit'
import { createTaskCalendarSlice, updateTaskCalendarSlice } from '@/main/factories/slices/makeCalendar'
import { createTaskFormSlice, updateTaskFormSlice } from '@/main/factories/slices/makeForm'

const store = configureStore({
  reducer: {
    // Calendar
    [createTaskCalendarSlice.name]: createTaskCalendarSlice.reducer,
    [updateTaskCalendarSlice.name]: updateTaskCalendarSlice.reducer,

    // Forms
    [createTaskFormSlice.name]: createTaskFormSlice.reducer,
    [updateTaskFormSlice.name]: updateTaskFormSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
