import React from 'react'
import CheckCircleIconProps from './protocols/CheckIcon.model'
import { style } from './stylesheet'

const CheckCircleIcon: React.FC<CheckCircleIconProps> = (props) => {
  const checkIconStyle = style.checkCircleIconRecipe({
    color: props.color,
    size: props.size
  })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={checkIconStyle}
      viewBox="0 0 48 48"
      data-testid="check-circle-icon"
    >
      <path
        d="M21.169,38.07,42.8,16.438l-3.379-3.492L21.169,31.2l-8.564-8.564L9.226,26.014ZM26.015,2.016A23.115,23.115,0,0,1,42.972,9.059a23.115,23.115,0,0,1,7.043,16.957,23.115,23.115,0,0,1-7.043,16.957,23.115,23.115,0,0,1-16.957,7.043A23.115,23.115,0,0,1,9.058,42.973,23.115,23.115,0,0,1,2.015,26.016,23.115,23.115,0,0,1,9.058,9.059,23.115,23.115,0,0,1,26.015,2.016Z"
        transform="translate(-2.015 -2.016)"
      />
    </svg>
  )
}

export default CheckCircleIcon
