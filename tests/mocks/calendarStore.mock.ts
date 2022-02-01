import { DateTime } from 'luxon'
import { Reducer } from 'redux'
import { calendarReducer } from '@/context/models/calendar'
import { RootState } from '@/context/store'

type Store = {
  reducer: { [key: string]: Reducer<any, any> }
  preloadedState: Partial<RootState>
}

export const calendarStoreMock: Store = {
  reducer: { calendar: calendarReducer },
  preloadedState: {
    calendar: {
      calendarDate: DateTime.local(2022, 1, 1, 0, 0, 0, 0).toMillis(),
      selectedDate: DateTime.local(2022, 1, 1, 0, 0, 0, 0).toMillis(),
      previousDate: DateTime.local(2022, 1, 1, 0, 0, 0, 0).toMillis(),
      isCalendarOpen: true
    }
  }
}
