import React from 'react'
import Card from '../../atoms/Card/Card'
import Backdrop from '../../utils/Backdrop'
import * as style from './stylesheet'
import { ModalRecipeVariants } from './stylesheet'

type ModalProps = {
  direction?: ModalRecipeVariants['direction']
  onDismiss?: VoidFunction
  isOpen?: boolean
}

const Modal: React.FC<ModalProps> = ({
  direction,
  children,
  onDismiss,
  isOpen
}) => {
  const modalStyle = style.modalRecipe({
    direction
  })

  return (
    <Backdrop isOpen={isOpen} onDismiss={onDismiss}>
      <div className={modalStyle} data-testid="modal">
        <Card>{children}</Card>
      </div>
    </Backdrop>
  )
}

Modal.defaultProps = {
  direction: 'top'
}

export default Modal
