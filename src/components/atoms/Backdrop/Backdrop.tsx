import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import dismissOnClickHandler from './methods/dismissOnClickHandler'
import dismissOnEscapeHandler from './methods/dismissOnEscapeHandler'
import BackdropProps from './protocols/Backdrop.model'
import * as style from './stylesheet'

const Backdrop: React.FC<BackdropProps> = (props) => {
  const [isOpenState, setIsOpenState] = useState(false)

  useEffect(() => {
    setIsOpenState(!!props.isOpen)
  }, [props.isOpen])

  useEffect(() => {
    document.addEventListener('keydown', (event) =>
      dismissOnEscapeHandler({ event, setIsOpenState, onDismiss: props.onDismiss })
    )
  }, [])

  const element = isOpenState && (
    <div
      className={style.backdrop}
      data-testid="backdrop"
      onClick={(event) => dismissOnClickHandler({ event, setIsOpenState, onDismiss: props.onDismiss })}
    >
      {props.children}
    </div>
  )

  return ReactDOM.createPortal(element, document.getElementById('overlay-root') as HTMLElement)
}

export default Backdrop
