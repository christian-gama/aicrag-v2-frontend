import IHandler from '@/domain/handler/handler.model'
import ModalProps from '../protocols/Modal.model'

type Params = {
  event: KeyboardEvent
  setIsOpenState: React.Dispatch<React.SetStateAction<boolean>>
  onDismiss: ModalProps['onDismiss']
}

const dismissOnEscapeHandler: IHandler<Params> = ({ event, onDismiss, setIsOpenState }): void => {
  if (event.key === 'Escape') {
    if (onDismiss) onDismiss()

    setIsOpenState(false)
  }
}

export default dismissOnEscapeHandler
