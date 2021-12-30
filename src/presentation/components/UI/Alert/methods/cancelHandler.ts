import IHandler from '@/domain/handler/handler.model'
import AlertProps from '../Alert.model'

type Params = {
  setIsOpenState: React.Dispatch<React.SetStateAction<boolean>>
  onCancel: AlertProps['onCancel']
}

const cancelHandler: IHandler<Params> = ({ setIsOpenState, onCancel }) => {
  if (onCancel) onCancel()

  setIsOpenState(false)
}

export default cancelHandler
