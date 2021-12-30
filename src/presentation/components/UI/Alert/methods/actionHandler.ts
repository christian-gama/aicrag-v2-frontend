import IHandler from '@/domain/handler/handler.model'
import AlertProps, { AlertWithAction } from '../Alert.model'

type Params = {
  setIsOpenState: React.Dispatch<React.SetStateAction<boolean>>
  mode: AlertProps['mode']
  onAction: AlertWithAction['onAction']
}

const handleAction: IHandler<Params> = ({ setIsOpenState, mode, onAction }) => {
  if (mode === 'actionAndCancel') {
    onAction()

    setIsOpenState(false)
  }
}

export default handleAction
