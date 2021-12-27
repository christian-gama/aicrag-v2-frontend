import React, { MouseEvent } from 'react'
import LoadingSpinner from '../loadingSpinner/LoadingSpinner'
import { buttonRecipe, ButtonVariants } from './Button.css'

interface Props {
  style?: {
    color?: ButtonVariants['color']
    mode?: ButtonVariants['mode']
    size?: ButtonVariants['size']
  }
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  children?: React.ReactNode
  disabled?: ButtonVariants['disabled']
  loading?: boolean
  onClick?: (event?: MouseEvent) => void
  testid?: string
}

const Button: React.FC<Props> = ({ onClick, style, children, loading, disabled, testid, type }: Props) => {
  const clickHandler = (event: MouseEvent): void => {
    if (disabled ?? loading) return

    onClick?.(event)
  }

  const className = buttonRecipe({
    ...style,
    disabled
  })

  const renderChildren = (): React.ReactNode => {
    if (loading) {
      return (
        <LoadingSpinner
          style={{
            color: getLoadingColor(style)
          }}
        />
      )
    }

    return children
  }

  return (
    <button
      className={className}
      data-testid={testid}
      disabled={disabled}
      onClick={clickHandler}
      type={type ?? 'button'}
    >
      {renderChildren()}
    </button>
  )
}

export default Button

const getLoadingColor = (style: Props['style']): 'white' | 'main' =>
  !style?.mode || style?.mode === 'contained' ? 'white' : 'main'
