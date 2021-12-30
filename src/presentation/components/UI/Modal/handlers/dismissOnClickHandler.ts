import IHandler from '@/domain/handler/handler.model'
import ModalProps from '../Modal.model'

type States = {
  event: React.MouseEvent
  setIsOpenState: React.Dispatch<React.SetStateAction<boolean>>
}

const dismissOnClickHandler: IHandler<ModalProps, States> = (props, states) => {
  if (states.event.target === states.event.currentTarget) {
    if (props.onDismiss) props.onDismiss()

    states.setIsOpenState(false)
  }
}

export default dismissOnClickHandler
