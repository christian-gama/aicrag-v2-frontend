import IValidation from '@/domain/validation/validation.model'
import { ICalendar } from '@/application/models/calendar'

type CalendarTimerProps = {
  name: ICalendar['name']
  validation: IValidation
}

export default CalendarTimerProps
