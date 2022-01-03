import React from 'react'
import ErrorIconProps from './ErrorIcon.model'
import { errorIconClasses } from './stylesheet/ErrorIcon.css'

const ErrorIcon: React.FC<ErrorIconProps> = (props) => {
  const errorIconStyle = errorIconClasses.iconRecipe({
    color: props.color,
    size: props.size
  })

  return (
    <svg className={errorIconStyle} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 L10,0 Z M11,15 L9,15 L9,13 L11,13 L11,15 L11,15 Z M11,11 L9,11 L9,5 L11,5 L11,11 L11,11 Z"
        id="error-icon"
      />
    </svg>
  )
}

export default ErrorIcon
