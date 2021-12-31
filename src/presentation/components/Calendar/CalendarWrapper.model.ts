import { CalendarStates } from '@/application/models/calendar/protocols/calendar.model'

type CalendarWrapperProps = {
  isCalendarOpen: CalendarStates['isCalendarOpen']
  onDismiss: () => void
}

export default CalendarWrapperProps
