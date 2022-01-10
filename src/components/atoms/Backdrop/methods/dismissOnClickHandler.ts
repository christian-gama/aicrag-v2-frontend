import IHandler from '@/domain/handler/handler.model'
import BackdropProps from '../protocols/Backdrop.model'

type Params = {
  event: React.MouseEvent
  setIsOpenState: React.Dispatch<React.SetStateAction<boolean>>
  onDismiss: BackdropProps['onDismiss']
}

const dismissOnClickHandler: IHandler<Params> = ({ event, onDismiss, setIsOpenState }) => {
  if (event.target === event.currentTarget) {
    if (onDismiss) onDismiss()

    setIsOpenState(false)
  }
}

export default dismissOnClickHandler
