import IHandler from '@/domain/handler/handler.model'
import AlertProps from '../Alert.model'

type States = {
  setIsOpenState: React.Dispatch<React.SetStateAction<boolean>>
}

const cancelHandler: IHandler<AlertProps, States> = (props, states) => {
  if (props.onCancel) props.onCancel()

  states.setIsOpenState(false)
}

export default cancelHandler
