import IHandler from '@/domain/handler/handler.model'
import { CalendarActions, CalendarStates } from '@/application/models/calendar/protocols/calendar.model'

type Params = {
  dispatch: React.Dispatch<React.SetStateAction<any>>
  saveCalendar: CalendarActions['saveCalendar']
  closeCalendar: CalendarActions['closeCalendar']
  selectedDate: CalendarStates['selectedDate']
}

const onConfirmHandler: IHandler<Params> = ({ closeCalendar, dispatch, saveCalendar, selectedDate }) => {
  dispatch(saveCalendar(selectedDate))
  dispatch(closeCalendar())
}

export default onConfirmHandler
