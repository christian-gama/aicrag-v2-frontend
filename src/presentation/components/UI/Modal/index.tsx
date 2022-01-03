import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Card from '../Card'
import dismissOnClickHandler from './methods/dismissOnClickHandler'
import dismissOnEscapeHandler from './methods/dismissOnEscapeHandler'
import ModalProps from './Modal.model'
import { modalClasses } from './stylesheet/Modal.css'

const Modal: React.FC<ModalProps> = (props) => {
  const [isOpenState, setIsOpenState] = useState(false)

  useEffect(() => {
    setIsOpenState(!!props.isOpen)
  }, [props.isOpen])

  useEffect(() => {
    document.addEventListener('keydown', (event) =>
      dismissOnEscapeHandler({ event, setIsOpenState, onDismiss: props.onDismiss })
    )
  }, [])

  const modalStyle = modalClasses.modalRecipe({
    direction: props.direction
  })

  const element = isOpenState && (
    <div
      className={modalClasses.backdropStyle}
      data-testid="backdrop"
      onClick={(event) => dismissOnClickHandler({ event, setIsOpenState, onDismiss: props.onDismiss })}
    >
      <Card>
        <div className={modalStyle} data-testid="modal">
          {props.children}
        </div>
      </Card>
    </div>
  )

  return ReactDOM.createPortal(element, document.getElementById('overlay-root') as HTMLElement)
}

export default Modal
