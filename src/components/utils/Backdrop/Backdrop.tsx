import ReactDOM from 'react-dom'
import { useBackdrop } from './hooks'
import * as classes from './stylesheet'

type BackdropProps = {
  onDismiss?: VoidFunction
  isOpen?: boolean
}

export const Backdrop: React.FC<BackdropProps> = ({
  onDismiss,
  children,
  isOpen
}) => {
  const { dismissOnClickHandler, isOpenState } = useBackdrop({
    onDismiss,
    children,
    isOpen
  })

  const element = isOpenState && (
    <div
      onClick={dismissOnClickHandler}
      className={classes.backdrop}
      data-testid="backdrop"
    >
      {children}
    </div>
  )

  const overlayRoot = document.getElementById('overlay-root') as HTMLElement

  return ReactDOM.createPortal(element, overlayRoot)
}
