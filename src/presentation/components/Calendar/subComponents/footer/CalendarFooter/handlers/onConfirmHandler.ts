import IHandler from '@/domain/handler/handler.model'
import { ICalendar } from '@/infra/store/calendar'
import CalendarFooterProps from '../CalendarFooter.model'

type States = {
  dispatch: React.Dispatch<React.SetStateAction<any>>
  saveCalendar: ICalendar['actions']['saveCalendar']
  closeCalendar: ICalendar['actions']['closeCalendar']
  selectedDate: ICalendar['states']['selectedDate']
}

const onConfirmHandler: IHandler<CalendarFooterProps, States> = (_, states) => {
  states.dispatch(states.saveCalendar(states.selectedDate))
  states.dispatch(states.closeCalendar())
}

export default onConfirmHandler
