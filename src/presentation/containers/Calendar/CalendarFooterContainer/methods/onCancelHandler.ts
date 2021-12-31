import IHandler from '@/domain/handler/handler.model'
import { CalendarActions, CalendarStates } from '@/application/models/calendar/protocols/calendar.model'

type Params = {
  dispatch: React.Dispatch<React.SetStateAction<any>>
  resetCalendar: CalendarActions['resetCalendar']
  closeCalendar: CalendarActions['closeCalendar']
  previousDate: CalendarStates['previousDate']
}

const onCancelHandler: IHandler<Params> = ({ closeCalendar, dispatch, resetCalendar, previousDate }): void => {
  dispatch(resetCalendar(previousDate))
  dispatch(closeCalendar())
}

export default onCancelHandler
