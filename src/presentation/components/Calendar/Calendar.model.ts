import { CalendarStates } from '@/application/models/redux/calendar/protocols/calendar.model'

type CalendarProps = {
  isCalendarOpen: CalendarStates['isCalendarOpen']
  onDismiss: () => void
}

export default CalendarProps
