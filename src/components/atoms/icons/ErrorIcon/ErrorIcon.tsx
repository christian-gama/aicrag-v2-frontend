import React from 'react'
import * as style from './stylesheet'
import { ErrorIconVariants } from './stylesheet'

type ErrorIconProps = {
  color?: ErrorIconVariants['color']
  size?: ErrorIconVariants['size']
}

const ErrorIcon: React.FC<ErrorIconProps> = ({ children, color, size }) => {
  const errorIconStyle = style.errorIconRecipe({
    color,
    size
  })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={errorIconStyle}
      data-testid="error-icon"
      viewBox="0 0 20 20"
    >
      <path
        d="M10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 L10,0 Z M11,15 L9,15 L9,13 L11,13 L11,15 L11,15 Z M11,11 L9,11 L9,5 L11,5 L11,11 L11,11 Z"
        id="error-icon"
      />
    </svg>
  )
}

ErrorIcon.defaultProps = {
  color: 'primary',
  size: 'md'
}

export default ErrorIcon
