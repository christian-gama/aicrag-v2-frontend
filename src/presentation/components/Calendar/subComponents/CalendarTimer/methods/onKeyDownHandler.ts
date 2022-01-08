import IHandler from '@/domain/handler/handler.model'
import timerIncreaser from '@/application/utils/timerIncreaser'

type Params = {
  event: React.KeyboardEvent<HTMLInputElement>
  setHours: React.Dispatch<React.SetStateAction<string>>
  setMinutes: React.Dispatch<React.SetStateAction<string>>
}

const onKeyDownHandler: IHandler<Params> = ({ event, setHours, setMinutes }) => {
  const { name } = event.currentTarget

  switch (event.key) {
    case 'ArrowUp':
      return name === 'calendar-hour'
        ? setHours((prevHours) => timerIncreaser({ increase: true, prevTime: prevHours, type: 'hour' }))
        : setMinutes((prevMinutes) => timerIncreaser({ increase: true, prevTime: prevMinutes, type: 'minute' }))

    case 'ArrowDown':
      return name === 'calendar-hour'
        ? setHours((prevHours) => timerIncreaser({ increase: false, prevTime: prevHours, type: 'hour' }))
        : setMinutes((prevMinutes) => timerIncreaser({ increase: false, prevTime: prevMinutes, type: 'minute' }))
  }
}

export default onKeyDownHandler
