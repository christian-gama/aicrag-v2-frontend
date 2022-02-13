import { calendarReducer } from '../models/calendar/calendar.reducer'
import { filterReducer } from '../models/filter'
import { mailerCountdownReducer } from '../models/mailerCountdown/mailerCountdown.reducer'

export const reducers = {
  calendar: calendarReducer,
  mailerCountdown: mailerCountdownReducer,
  filter: filterReducer
}
