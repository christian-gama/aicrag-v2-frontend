import IHandler from '@/domain/handler/handler.model'
import AlertProps from '../Alert.model'

const handleCancel: IHandler<AlertProps> = (props, states) => {
  if (props.onCancel) props.onCancel()

  states.setIsOpenState(false)
}

export default handleCancel
