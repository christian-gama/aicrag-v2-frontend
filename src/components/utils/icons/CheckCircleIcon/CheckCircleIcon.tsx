import React from 'react'
import * as style from './stylesheet'
import { CheckCircleIconVariants } from './stylesheet'

type CheckCircleIconProps = {
  color?: CheckCircleIconVariants['color']
  size?: CheckCircleIconVariants['size']
}

const CheckCircleIcon: React.FC<CheckCircleIconProps> = ({ color, size }) => {
  const checkIconStyle = style.checkCircleIconRecipe({
    color,
    size
  })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-testid="check-circle-icon"
      className={checkIconStyle}
      viewBox="0 0 48 48"
    >
      <path
        d="M21.169,38.07,42.8,16.438l-3.379-3.492L21.169,31.2l-8.564-8.564L9.226,26.014ZM26.015,2.016A23.115,23.115,0,0,1,42.972,9.059a23.115,23.115,0,0,1,7.043,16.957,23.115,23.115,0,0,1-7.043,16.957,23.115,23.115,0,0,1-16.957,7.043A23.115,23.115,0,0,1,9.058,42.973,23.115,23.115,0,0,1,2.015,26.016,23.115,23.115,0,0,1,9.058,9.059,23.115,23.115,0,0,1,26.015,2.016Z"
        transform="translate(-2.015 -2.016)"
      />
    </svg>
  )
}

CheckCircleIcon.defaultProps = {
  color: 'primary',
  size: 'md'
}

export default CheckCircleIcon
