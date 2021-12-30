import IHandler from '@/domain/handler/handler.model'
import { CalendarStates } from '@/application/models/calendar/protocols/calendar.model'

type Params = {
  event: React.ChangeEvent<HTMLInputElement>
  setHours: React.Dispatch<React.SetStateAction<string>>
  setMinutes: React.Dispatch<React.SetStateAction<string>>
  validation: CalendarStates['validation']
}

const onChangeHandler: IHandler<Params> = ({ event, setHours, setMinutes, validation }) => {
  const { name, value } = event.target

  switch (name) {
    case 'calendar-hour':
      return !validation.validate('hora', { hora: value }) ? setHours(value) : undefined

    case 'calendar-minute':
      return !validation.validate('minuto', { minuto: value }) ? setMinutes(value) : undefined
  }
}

export default onChangeHandler
