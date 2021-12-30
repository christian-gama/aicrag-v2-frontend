import IHandler from '@/domain/handler/handler.model'
import CalendarTimerProps from '../CalendarTimer.model'

type States = {
  event: React.ChangeEvent<HTMLInputElement>
  setHours: React.Dispatch<React.SetStateAction<string>>
  setMinutes: React.Dispatch<React.SetStateAction<string>>
}

const onChangeHandler: IHandler<CalendarTimerProps, States> = (props, states) => {
  const { name, value } = states.event.target

  switch (name) {
    case 'calendar-hour':
      return !props.validation!.validate('hora', { hora: value }) ? states.setHours(value) : undefined

    case 'calendar-minute':
      return !props.validation!.validate('minuto', { minuto: value }) ? states.setMinutes(value) : undefined
  }
}

export default onChangeHandler
