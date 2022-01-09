import { PopoverVariants } from '../stylesheet'

type PopoverProps = {
  isOpen?: boolean
  duration?: number
  message: string | string[]
  type: PopoverVariants['type']
  onClose?: () => void
}

export default PopoverProps
