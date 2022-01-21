import React from 'react'
import ReactDOM from 'react-dom'
import useBackdrop from './hooks/useBackdrop'
import * as style from './stylesheet'

type BackdropProps = {
  isOpen?: boolean
  onDismiss?: VoidFunction
}

const Backdrop: React.FC<BackdropProps> = ({ children, isOpen, onDismiss }) => {
  const { dismissOnClickHandler, isOpenState } = useBackdrop({
    children,
    isOpen,
    onDismiss
  })

  const element = isOpenState && (
    <div
      className={style.backdrop}
      data-testid="backdrop"
      onClick={dismissOnClickHandler}
    >
      {children}
    </div>
  )

  const overlayRoot = document.getElementById('overlay-root') as HTMLElement

  return ReactDOM.createPortal(element, overlayRoot)
}

export default Backdrop
