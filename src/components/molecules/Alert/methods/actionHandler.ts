import IHandler from '@/domain/handler/handler.model'
import AlertProps, { AlertWithAction } from '../Alert.model'

type Params = {
  mode: AlertProps['mode']
  onAction: AlertWithAction['onAction']
}

const handleAction: IHandler<Params> = ({ mode, onAction }) => {
  if (mode === 'actionAndCancel') {
    onAction()
  }
}

export default handleAction
