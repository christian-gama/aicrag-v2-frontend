import IHandler from '@/domain/handler/handler.model'
import getFormattedTime from '@/application/utils/getFormattedTime'

type Params = {
  event: React.FocusEvent<HTMLInputElement>
  setHours: React.Dispatch<React.SetStateAction<string>>
  setMinutes: React.Dispatch<React.SetStateAction<string>>
}

const onBlurHandler: IHandler<Params> = ({ event, setHours, setMinutes }) => {
  const { value, name } = event.target

  switch (name) {
    case 'calendar-hour':
      return setHours(getFormattedTime(+value))

    case 'calendar-minute':
      return setMinutes(getFormattedTime(+value))
  }
}

export default onBlurHandler
