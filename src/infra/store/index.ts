import { configureStore } from '@reduxjs/toolkit'
import { makeReducers } from './utils/makeReducers'

const store = configureStore({
  reducer: makeReducers('all')
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
