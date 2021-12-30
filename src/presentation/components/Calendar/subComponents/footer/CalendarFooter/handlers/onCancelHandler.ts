import IHandler from '@/domain/handler/handler.model'
import { ICalendar } from '@/application/models/calendar'
import CalendarFooterProps from '../CalendarFooter.model'

type States = {
  dispatch: React.Dispatch<React.SetStateAction<any>>
  resetCalendar: ICalendar['actions']['resetCalendar']
  closeCalendar: ICalendar['actions']['closeCalendar']
}

const onCancelHandler: IHandler<CalendarFooterProps, States> = (_, states): void => {
  states.dispatch(states.resetCalendar())
  states.dispatch(states.closeCalendar())
}

export default onCancelHandler
