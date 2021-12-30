import { DateTime } from 'luxon'
import { Reducer } from 'react'
import { calendarReducer } from '@/application/models/calendar'
import { RootState } from '@/application/store'
import makeTimerValidator from '@/main/factories/validation/makeTimerValidator'

type Store = {
  reducer: { [key: string]: Reducer<any, any> }
  preloadedState: Partial<RootState>
}

const calendarStoreMock: Store = {
  reducer: { calendar: calendarReducer },
  preloadedState: {
    calendar: {
      calendarDate: DateTime.local(2022, 1, 1, 0, 0).toMillis(),
      selectedDate: DateTime.local(2022, 1, 1, 0, 0).toMillis(),
      previousDate: DateTime.local(2022, 1, 1, 0, 0).toMillis(),
      isCalendarOpen: true,
      validation: makeTimerValidator()
    }
  }
}

export default calendarStoreMock
