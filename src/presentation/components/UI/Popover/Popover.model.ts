import { PopoverVariants } from './stylesheet/recipes'

type PopoverProps = {
  isOpen?: boolean
  duration?: number
  message: string | string[]
  type: PopoverVariants['type']
}

export default PopoverProps
