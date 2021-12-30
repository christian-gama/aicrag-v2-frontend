import { EyeIconVariants } from './EyeIcon.css'

type EyeIconProps = {
  style?: {
    size?: EyeIconVariants['size']
    color?: EyeIconVariants['color']
  }
  onClick?: () => void
  showPassword: boolean
}

export default EyeIconProps
