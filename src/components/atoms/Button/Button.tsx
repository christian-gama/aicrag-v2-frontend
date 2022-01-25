import React from 'react'
import LoadingSpinnerIcon from '../icons/LoadingSpinnerIcon'
import * as styles from './stylesheet'
import { ButtonVariants } from './stylesheet'

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

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  loading,
  onClick,
  testid,
  style,
  type
}) => {
  const buttonStyle = styles.buttonRecipe({
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
      className={buttonStyle}
      data-testid={testid ?? 'button'}
      disabled={!!disabled || !!loading}
      onClick={onClick}
      type={type ?? 'button'}
    >
      {renderChildren()}
    </button>
  )
}

export default Button
