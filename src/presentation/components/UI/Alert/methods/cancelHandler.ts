import IHandler from '@/domain/handler/handler.model'
import AlertProps from '../Alert.model'

type Params = {
  onCancel: AlertProps['onCancel']
}

const cancelHandler: IHandler<Params> = ({ onCancel }) => {
  if (onCancel) onCancel()
}

export default cancelHandler
