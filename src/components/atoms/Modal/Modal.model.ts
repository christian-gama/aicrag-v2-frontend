import { ModalRecipeVariants } from './stylesheet/modal.css'

type ModalProps = {
  direction?: ModalRecipeVariants['direction']
  isOpen?: boolean
  onDismiss?: VoidFunction
}

export default ModalProps
