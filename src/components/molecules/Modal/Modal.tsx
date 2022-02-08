import { Backdrop } from '@/components/utils/Backdrop'
import { ModalRecipeVariants } from './stylesheet'
import * as classes from './stylesheet'

type ModalProps = {
  direction?: ModalRecipeVariants['direction']
  onDismiss?: VoidFunction
  isOpen?: boolean
}

export const Modal: React.FC<ModalProps> = ({
  direction,
  children,
  onDismiss,
  isOpen
}) => {
  const modalStyle = classes.modalRecipe({
    direction
  })

  return (
    <Backdrop isOpen={isOpen} onDismiss={onDismiss}>
      <div className={modalStyle} data-testid="modal">
        {children}
      </div>
    </Backdrop>
  )
}

Modal.defaultProps = {
  direction: 'top'
}
