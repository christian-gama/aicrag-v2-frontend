import { DateTime } from 'luxon'
import { Reducer } from 'react'
import { RootState } from '@/infra/store'
import { makeReducers } from '@/infra/store/utils/makeReducers'

type Store = {
  reducer: { [key: string]: Reducer<any, any> }
  preloadedState: Partial<RootState>
}

const calendarStoreMock: Store = {
  reducer: { createTaskCalendar: makeReducers('createTaskCalendar') },
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
