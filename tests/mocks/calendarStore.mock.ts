import { DateTime } from 'luxon'
import { Reducer } from 'react'
import { RootState } from '@/infra/store'
import { createTaskCalendarSlice } from '@/main/factories/slices/makeCalendar'

type Store = {
  reducer: Reducer<any, any>
  preloadedState: Partial<RootState>
}

const calendarStoreMock: Store = {
  reducer: createTaskCalendarSlice.reducer,
  preloadedState: {
    createTaskCalendar: {
      calendarDate: DateTime.local(2022, 1, 1, 0, 0).toMillis(),
      selectedDate: DateTime.local(2022, 1, 1, 0, 0).toMillis(),
      previousDate: DateTime.local(2022, 1, 1, 0, 0).toMillis(),
      isCalendarOpen: true
    }
  }
}

export default calendarStoreMock
