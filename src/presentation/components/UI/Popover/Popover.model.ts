import { PopoverVariants } from './stylesheet/Popover.css'

type PopoverProps = {
  isOpen?: boolean
  duration?: number
  message: string | string[]
  type: PopoverVariants['type']
}

export default PopoverProps
