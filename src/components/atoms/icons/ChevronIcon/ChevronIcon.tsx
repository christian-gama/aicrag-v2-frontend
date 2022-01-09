import React from 'react'
import ChevronIconProps from './protocols/ChevronIcon.model'
import { style } from './stylesheet'

const ChevronIcon: React.FC<ChevronIconProps> = (props) => {
  const chevronStyle = style.chevronIconRecipe({
    color: props.color,
    direction: props.direction,
    size: props.size
  })

  return (
    <div className={style.chevronIconHitbox} onClick={props.onClick} data-testid={'chevron-icon'}>
      <svg className={chevronStyle} xmlns="http://www.w3.org/2000/svg" width="27" height="48" viewBox="0 0 27 48">
        <path
          d="M28.217,28.513,8.417,49.875a2.321,2.321,0,0,1-3.458,0L2.649,47.384a2.788,2.788,0,0,1,0-3.726L18.337,26.648,2.645,9.638a2.788,2.788,0,0,1,0-3.726L4.959,3.42a2.321,2.321,0,0,1,3.458,0l19.8,21.362A2.787,2.787,0,0,1,28.217,28.513Z"
          transform="translate(-1.933 -2.648)"
        />
      </svg>
    </div>
  )
}

export default ChevronIcon
