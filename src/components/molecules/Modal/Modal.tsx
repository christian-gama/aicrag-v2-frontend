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

const Modal: React.FC<ModalProps> = (props) => {
  const modalStyle = style.modalRecipe({
    direction: props.direction
  })

  return (
    <Backdrop {...props}>
      <div className={modalStyle} data-testid="modal">
        <Card>{props.children}</Card>
      </div>
    </Backdrop>
  )
}

export default Modal
