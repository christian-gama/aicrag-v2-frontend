import React from 'react'
import ReactDOM from 'react-dom'
import useBackdrop from './hooks/useBackdrop'
import BackdropProps from './protocols/Backdrop.model'
import * as style from './stylesheet'

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
