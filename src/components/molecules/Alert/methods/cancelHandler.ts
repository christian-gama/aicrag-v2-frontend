import IHandler from '@/domain/handler/handler.model'
import AlertProps from '../Alert.model'

type Params = {
  onCancel: AlertProps['onCancel']
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const cancelHandler: IHandler<Params> = ({ onCancel, setIsOpen }) => {
  if (onCancel) onCancel()

  setIsOpen(false)
}

export default cancelHandler
