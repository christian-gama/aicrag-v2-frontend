import React from 'react'
import Backdrop from '../../atoms/Backdrop'
import Card from '../../atoms/Card/Card'
import ModalProps from './protocols/Modal.model'
import * as style from './stylesheet'

const Modal: React.FC<ModalProps> = (props) => {
  const modalStyle = style.modalRecipe({
    direction: props.direction
  })

  return (
    <Backdrop {...props}>
      <Card>
        <div className={modalStyle} data-testid="modal">
          {props.children}
        </div>
      </Card>
    </Backdrop>
  )
}

export default Modal
