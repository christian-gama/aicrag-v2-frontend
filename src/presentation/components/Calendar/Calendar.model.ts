import IValidation from '@/domain/validation/validation.model'
import { ICalendar } from '@/application/models/calendar'

type CalendarProps = {
  name: ICalendar['name']
  validation: IValidation
}

export default CalendarProps
