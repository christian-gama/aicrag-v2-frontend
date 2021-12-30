import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Card from '../Card'
import dismissOnClickHandler from './handlers/dismissOnClickHandler'
import dismissOnEscapeHandler from './handlers/dismissOnEscapeHandler'
import { modalClasses } from './Modal.css'
import ModalProps from './Modal.model'

const Modal: React.FC<ModalProps> = (props) => {
  const [isOpenState, setIsOpenState] = useState(false)

  useEffect(() => {
    setIsOpenState(!!props.isOpen)
  }, [props.isOpen])

  useEffect(() => {
    document.addEventListener('keydown', (event) =>
      dismissOnEscapeHandler({ onDismiss: props.onDismiss }, { event, setIsOpenState })
    )
  }, [])

  const modalStyle = modalClasses.modalRecipe({
    direction: props.direction
  })

  const element = isOpenState && (
    <div
      className={modalClasses.backdropStyle}
      onClick={(event) => dismissOnClickHandler({ onDismiss: props.onDismiss }, { event, setIsOpenState })}
      data-testid="backdrop"
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
