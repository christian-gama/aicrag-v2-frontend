import IHandler from '@/domain/handler/handler.model'
import AlertProps from '../Alert.model'

const handleAction: IHandler<AlertProps> = (props, states) => {
  if (props.mode === 'actionAndCancel' && props.onAction) {
    props.onAction()

    states.setIsOpenState(false)
  }
}

export default handleAction
