import { configureStore } from '@reduxjs/toolkit'
import calendar from './calendar'

const store = configureStore({
  reducer: {
    calendar
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
