import { DateTime } from 'luxon'
import { Reducer } from 'react'
import { RootState } from '@/infra/store'
import calendarReducer from '@/infra/store/calendarReducer'

type Store = {
  reducer: Reducer<any, any>
  preloadedState: RootState
}

const calendarStoreMock: Store = {
  reducer: calendarReducer,
  preloadedState: {
    calendar: {
      calendarDate: DateTime.local(2022, 1, 1, 0, 0).toMillis(),
      selectedDate: DateTime.local(2022, 1, 1, 0, 0).toMillis()
    }
  }
}

export default calendarStoreMock
