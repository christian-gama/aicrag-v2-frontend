import React from 'react'
import ReactDOM from 'react-dom'
import useBackdrop from './hooks/useBackdrop'
import * as style from './stylesheet'

type BackdropProps = {
  isOpen?: boolean
  onDismiss?: VoidFunction
}

const Backdrop: React.FC<BackdropProps> = (props) => {
  const { dismissOnClickHandler, isOpenState } = useBackdrop(props)

  const element = isOpenState && (
    <div className={style.backdrop} data-testid="backdrop" onClick={dismissOnClickHandler}>
      {props.children}
    </div>
  )

  return ReactDOM.createPortal(element, document.getElementById('overlay-root') as HTMLElement)
}

export default Backdrop
