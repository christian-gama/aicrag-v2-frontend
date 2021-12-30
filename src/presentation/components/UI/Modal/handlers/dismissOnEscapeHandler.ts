import IHandler from '@/domain/handler/handler.model'
import ModalProps from '../Modal.model'

type States = {
  event: KeyboardEvent
  setIsOpenState: React.Dispatch<React.SetStateAction<boolean>>
}

const dismissOnEscapeHandler: IHandler<ModalProps, States> = (props, states): void => {
  if (states.event.key === 'Escape') {
    if (props.onDismiss) props.onDismiss()

    states.setIsOpenState(false)
  }
}

export default dismissOnEscapeHandler
