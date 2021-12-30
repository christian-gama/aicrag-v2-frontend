import IValidation from '@/domain/validation/validation.model'
import { ICalendar } from '@/infra/store/calendar'

type CalendarProps = {
  name: ICalendar['name']
  validation: IValidation
}

export default CalendarProps
