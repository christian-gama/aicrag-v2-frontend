import IHandler from '@/domain/handler/handler.model'
import IValidation from '@/domain/validation/validation.model'

type Params = {
  event: React.ChangeEvent<HTMLInputElement>
  setHours: React.Dispatch<React.SetStateAction<string>>
  setMinutes: React.Dispatch<React.SetStateAction<string>>
  validation: IValidation
}

const onChangeHandler: IHandler<Params> = ({ event, setHours, setMinutes, validation }) => {
  const { name, value } = event.target

  switch (name) {
    case 'calendar-hour':
      return !validation.validate('hour', { hour: value }) ? setHours(value) : undefined

    case 'calendar-minute':
      return !validation.validate('minute', { minute: value }) ? setMinutes(value) : undefined
  }
}

export default onChangeHandler
