import IHandler from '@/domain/handler/handler.model'
import AlertProps from '../Alert.model'

type States = {
  setIsOpenState: React.Dispatch<React.SetStateAction<boolean>>
}

const handleAction: IHandler<AlertProps, States> = (props, states) => {
  if (props.mode === 'actionAndCancel' && props.onAction) {
    props.onAction()

    states.setIsOpenState(false)
  }
}

export default handleAction
