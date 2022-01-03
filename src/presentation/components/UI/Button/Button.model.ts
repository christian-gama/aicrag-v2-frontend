import { ButtonVariants } from './stylesheet/buttonRecipe.css'

type ButtonProps = {
  style?: {
    color?: ButtonVariants['color']
    mode?: ButtonVariants['mode']
    size?: ButtonVariants['size']
  }
  disabled?: ButtonVariants['disabled']
  loading?: boolean
  testid?: string
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: (event?: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
}

export default ButtonProps
