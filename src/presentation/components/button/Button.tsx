import React, { MouseEvent } from 'react'
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

  return (
    <button disabled={disabled} onClick={clickHandler} className={className}>
      {loading ? 'Loading...' : children}
    </button>
  )
}

export default Button
