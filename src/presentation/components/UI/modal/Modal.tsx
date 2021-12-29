import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Card from '../card/Card'
import { modalClasses, ModalRecipeVariants } from './Modal.css'

type ModalProps = {
  onDismiss?: VoidFunction
  isOpen?: boolean
  direction?: ModalRecipeVariants['direction']
}

const Modal: React.FC<ModalProps> = ({ children, onDismiss, isOpen, direction }) => {
  const [isOpenState, setIsOpenState] = useState(false)

  useEffect(() => {
    setIsOpenState(!!isOpen)
  }, [isOpen])

  const overlayRoot = document.getElementById('overlay-root')
  if (!overlayRoot) {
    return null
  }

  const dismissOnClick = (event: React.MouseEvent): void => {
    if (event.target === event.currentTarget) {
      if (onDismiss) onDismiss()

      setIsOpenState(false)
    }
  }

  const dismissOnEscape = (event: React.KeyboardEvent<Element> | any): void => {
    if (event.key === 'Escape') {
      if (onDismiss) onDismiss()

      setIsOpenState(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', dismissOnEscape)
  }, [])

  const modalStyle = modalClasses.modalRecipe({
    direction
  })

  const element = isOpenState && (
    <div className={modalClasses.backdropStyle} onClick={dismissOnClick} data-testid="backdrop">
      <Card>
        <div className={modalStyle} data-testid="modal">
          {children}
        </div>
      </Card>
    </div>
  )

  return ReactDOM.createPortal(element, overlayRoot)
}

export default Modal
