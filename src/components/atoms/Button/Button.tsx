import React from 'react'
import LoadingSpinnerIcon from '../icons/LoadingSpinnerIcon'
import * as styles from './stylesheet'
import { ButtonVariants } from './stylesheet'

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
  onClick?: (
    event?: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void
}

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  loading,
  onClick,
  style,
  testid,
  type
}) => {
  const buttonStyle = styles.buttonRecipe({
    ...style,
    disabled: !!disabled
  })

  const getLoadingColor = (): 'white' | 'main' => {
    const hasMode = !!style?.mode
    const isContained = style?.mode === 'contained'
    const isLight = style?.color === 'light'

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
      data-testid={testid}
      disabled={!!disabled || !!loading}
      onClick={onClick}
      type={type ?? 'button'}
    >
      {renderChildren()}
    </button>
  )
}

export default Button
