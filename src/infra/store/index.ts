import { configureStore } from '@reduxjs/toolkit'
import calendar from './calendar'
import form from './form'

const store = configureStore({
  reducer: {
    calendar,
    form
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
