import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Card from '../card/Card'
import { backdropStyle, modalStyle } from './Modal.css'

interface ModalProps {
  isOpen: boolean
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: React.FC<ModalProps> = ({ isOpen, children, toggleModal }) => {
  return (
    <Backdrop isOpen={isOpen} toggleModal={toggleModal}>
      <Card>
        <div className={modalStyle} data-testid="modal">
          {children}
        </div>
      </Card>
    </Backdrop>
  )
}

const Backdrop: React.FC<ModalProps> = ({ isOpen, children, toggleModal }) => {
  const overlayRoot = document.getElementById('overlay-root')
  if (!overlayRoot) {
    return null
  }

  const dismissHandler = (event: React.MouseEvent): void => {
    if (event.target === event.currentTarget) {
      toggleModal(false)
    }
  }

  const dismissOnEscape = (event: React.KeyboardEvent<Element> | any): void => {
    if (event.key === 'Escape') {
      toggleModal(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', dismissOnEscape)
  }, [])

  const element = isOpen && (
    <div className={backdropStyle} onClick={dismissHandler} data-testid="backdrop">
      {children}
    </div>
  )

  return ReactDOM.createPortal(element, overlayRoot)
}

export default Modal
