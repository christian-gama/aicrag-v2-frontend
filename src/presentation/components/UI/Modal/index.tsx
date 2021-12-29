import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Card from '../Card'
import dismissOnClickHandler from './handlers/dismissOnClickHandler'
import dismissOnEscapeHandler from './handlers/dismissOnEscapeHandler'
import { modalClasses } from './Modal.css'
import ModalProps from './Modal.model'

const Modal: React.FC<ModalProps> = ({ children, onDismiss, isOpen, direction }) => {
  const [isOpenState, setIsOpenState] = useState(false)

  useEffect(() => {
    setIsOpenState(!!isOpen)
  }, [isOpen])

  useEffect(() => {
    document.addEventListener('keydown', (event) => dismissOnEscapeHandler({ onDismiss }, { event, setIsOpenState }))
  }, [])

  const modalStyle = modalClasses.modalRecipe({
    direction
  })

  const element = isOpenState && (
    <div
      className={modalClasses.backdropStyle}
      onClick={(event) => dismissOnClickHandler({ onDismiss }, { event, setIsOpenState })}
      data-testid="backdrop"
    >
      <Card>
        <div className={modalStyle} data-testid="modal">
          {children}
        </div>
      </Card>
    </div>
  )

  return ReactDOM.createPortal(element, document.getElementById('overlay-root') as HTMLElement)
}

export default Modal
