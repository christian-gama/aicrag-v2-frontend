import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/infra/store'
import { closeModal } from '@/infra/store/modal'
import Card from '../card/Card'
import { backdropStyle, modalStyle } from './Modal.css'

type ModalProps = {
  onDismiss?: VoidFunction
}

const Modal: React.FC<ModalProps> = ({ children, onDismiss }) => {
  return (
    <Backdrop onDismiss={onDismiss}>
      <Card>
        <div className={modalStyle} data-testid="modal">
          {children}
        </div>
      </Card>
    </Backdrop>
  )
}

const Backdrop: React.FC<ModalProps> = ({ children, onDismiss }) => {
  const dispatch = useDispatch<AppDispatch>()
  const isOpen = useSelector<RootState, boolean>((state) => state.modal.isOpen)

  const overlayRoot = document.getElementById('overlay-root')
  if (!overlayRoot) {
    return null
  }

  const dismissHandler = (event: React.MouseEvent): void => {
    if (event.target === event.currentTarget) {
      if (onDismiss) onDismiss()

      dispatch(closeModal())
    }
  }

  const dismissOnEscape = (event: React.KeyboardEvent<Element> | any): void => {
    if (event.key === 'Escape') {
      if (onDismiss) onDismiss()

      dispatch(closeModal())
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
