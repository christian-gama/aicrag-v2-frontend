import React from 'react'
import CloseIconProps from './CloseIcon.model'
import { checkIconClasses } from './stylesheet/CloseIcon.css'

const CloseIcon: React.FC<CloseIconProps> = (props) => {
  const closeIconStyle = checkIconClasses.iconRecipe({
    color: props.color,
    size: props.size
  })

  return (
    <div className={checkIconClasses.hitboxStyle}>
      <svg xmlns="http://www.w3.org/2000/svg" className={closeIconStyle} viewBox="0 0 48 48">
        <path
          d="M48,4.8,43.2,0,24,19.2,4.8,0,0,4.8,19.2,24,0,43.2,4.8,48,24,28.8,43.2,48,48,43.2,28.8,24Z"
          fillRule="evenodd"
        />
      </svg>
    </div>
  )
}

export default CloseIcon
