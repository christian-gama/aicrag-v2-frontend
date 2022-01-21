import React from 'react'
import Backdrop from '../../atoms/Backdrop'
import Card from '../../atoms/Card/Card'
import * as style from './stylesheet'
import { ModalRecipeVariants } from './stylesheet'

type ModalProps = {
  direction?: ModalRecipeVariants['direction']
  isOpen?: boolean
  onDismiss?: VoidFunction
}

const Modal: React.FC<ModalProps> = ({
  children,
  direction,
  isOpen,
  onDismiss
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

export default Modal
