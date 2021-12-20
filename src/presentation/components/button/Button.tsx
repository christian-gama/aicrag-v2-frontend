import React, { MouseEvent } from 'react'
import LoadingSpinner from '../loadingSpinner/LoadingSpinner'
import { buttonRecipe, ButtonVariants } from './Button.css'

interface Props {
  style?: {
    color?: ButtonVariants['color']
    mode?: ButtonVariants['mode']
    size?: ButtonVariants['size']
  }
  children?: React.ReactNode
  disabled?: ButtonVariants['disabled']
  loading?: boolean
  onClick?: (event?: MouseEvent) => void
}

const Button: React.FC<Props> = ({ onClick, style, children, loading, disabled }: Props) => {
  const clickHandler = (event: MouseEvent): void => {
    if (disabled || loading) return

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
    <button disabled={disabled} onClick={clickHandler} className={className}>
      {renderChildren()}
    </button>
  )
}

export default Button

const getLoadingColor = (style: Props['style']): 'white' | 'main' =>
  !style?.mode || style?.mode === 'contained' ? 'white' : 'main'
