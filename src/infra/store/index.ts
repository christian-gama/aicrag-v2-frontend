import { configureStore } from '@reduxjs/toolkit'
import calendar from './calendar'
import modal from './modal'

const store = configureStore({
  reducer: {
    calendar,
    modal
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
