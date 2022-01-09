import IHandler from '@/domain/handler/handler.model'
import ModalProps from '../protocols/Modal.model'

type Params = {
  event: React.MouseEvent
  setIsOpenState: React.Dispatch<React.SetStateAction<boolean>>
  onDismiss: ModalProps['onDismiss']
}

const dismissOnClickHandler: IHandler<Params> = ({ event, onDismiss, setIsOpenState }) => {
  if (event.target === event.currentTarget) {
    if (onDismiss) onDismiss()

    setIsOpenState(false)
  }
}

export default dismissOnClickHandler
