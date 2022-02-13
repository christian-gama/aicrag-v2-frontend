import { LoadingSpinnerIcon } from '@/components/utils/icons'
import { ButtonVariants } from './stylesheet'
import * as classes from './stylesheet'

type ButtonProps = {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  disabled?: ButtonVariants['disabled']
  loading?: boolean
  testid?: string
  style?: {
    color?: ButtonVariants['color']
    mode?: ButtonVariants['mode']
    size?: ButtonVariants['size']
  }
  onClick?: (
    event?: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void
}

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  loading,
  onClick,
  testid,
  style,
  type
}) => {
  const buttonStyle = classes.buttonRecipe({
    ...style,
    disabled: !!disabled
  })

  const getLoadingColor = (): 'white' | 'main' => {
    const isContained = style?.mode === 'contained'
    const isLight = style?.color === 'light'
    const hasMode = !!style?.mode

    if ((!hasMode || isContained) && !isLight) {
      return 'white'
    }

    return 'main'
  }

  const renderChildren = (): React.ReactNode => {
    if (loading) {
      return (
        <>
          {children}
          <LoadingSpinnerIcon
            style={{
              size: 'sm',
              color: getLoadingColor()
            }}
          />
        </>
      )
    }

    return children
  }

  return (
    <button
      disabled={!!disabled || !!loading}
      data-testid={testid ?? 'button'}
      className={buttonStyle}
      type={type ?? 'button'}
      onClick={onClick}
    >
      {renderChildren()}
    </button>
  )
}
