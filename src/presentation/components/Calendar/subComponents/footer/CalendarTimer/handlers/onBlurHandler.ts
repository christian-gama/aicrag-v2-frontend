import IHandler from '@/domain/handler/handler.model'
import getFormattedTime from '@/application/utils/getFormattedTime'
import CalendarTimerProps from '../CalendarTimer.model'

type States = {
  event: React.FocusEvent<HTMLInputElement>
  setHours: React.Dispatch<React.SetStateAction<string>>
  setMinutes: React.Dispatch<React.SetStateAction<string>>
}

const onBlurHandler: IHandler<CalendarTimerProps, States> = (_, states) => {
  const { value, name } = states.event.target

  switch (name) {
    case 'calendar-hour':
      return states.setHours(getFormattedTime(+value))

    case 'calendar-minute':
      return states.setMinutes(getFormattedTime(+value))
  }
}

export default onBlurHandler
