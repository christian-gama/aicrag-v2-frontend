import IHandler from '@/domain/handler/handler.model'
import { CalendarActions } from '@/application/models/calendar/protocols/calendar.model'

type Params = {
  dispatch: React.Dispatch<React.SetStateAction<any>>
  resetCalendar: CalendarActions['resetCalendar']
  closeCalendar: CalendarActions['closeCalendar']
}

const onCancelHandler: IHandler<Params> = ({ closeCalendar, dispatch, resetCalendar }): void => {
  dispatch(resetCalendar())
  dispatch(closeCalendar())
}

export default onCancelHandler
