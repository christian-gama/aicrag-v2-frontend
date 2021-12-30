import IHandler from '@/domain/handler/handler.model'
import timerIncreaser from '@/application/utils/timerIncreaser'
import CalendarTimerProps from '../CalendarTimer.model'

type States = {
  event: React.KeyboardEvent<HTMLInputElement>
  setHours: React.Dispatch<React.SetStateAction<string>>
  setMinutes: React.Dispatch<React.SetStateAction<string>>
}

const onKeyDownHandler: IHandler<CalendarTimerProps, States> = (props, states) => {
  const { name } = states.event.currentTarget

  switch (states.event.key) {
    case 'ArrowUp':
      return name === 'calendar-hour'
        ? states.setHours((prevHours) => timerIncreaser({ increase: true, prevTime: prevHours, type: 'hour' }))
        : states.setMinutes((prevMinutes) => timerIncreaser({ increase: true, prevTime: prevMinutes, type: 'minute' }))

    case 'ArrowDown':
      return name === 'calendar-hour'
        ? states.setHours((prevHours) => timerIncreaser({ increase: false, prevTime: prevHours, type: 'hour' }))
        : states.setMinutes((prevMinutes) => timerIncreaser({ increase: false, prevTime: prevMinutes, type: 'minute' }))
  }
}

export default onKeyDownHandler
