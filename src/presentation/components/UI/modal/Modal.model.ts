import { ModalRecipeVariants } from './Modal.css'

type ModalProps = {
  direction?: ModalRecipeVariants['direction']
  isOpen?: boolean
  onDismiss?: VoidFunction
}

export default ModalProps
