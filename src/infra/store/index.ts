import { configureStore } from '@reduxjs/toolkit'
import calendarReducer from './calendarReducer'

const store = configureStore({
  reducer: {
    calendar: calendarReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
