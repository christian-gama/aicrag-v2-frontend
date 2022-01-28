import React from 'react'
import * as style from './stylesheet'
import { BackIconVariants } from './stylesheet'

type BackIconProps = {
  color?: BackIconVariants['color']
  size?: BackIconVariants['size']
}

const BackIcon: React.FC<BackIconProps> = ({ color, size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-testid="back-icon"
      viewBox="0 0 48 48"
      className={style.backIconRecipe({
        color,
        size
      })}
    >
      <path d="M48,24A24,24,0,1,0,24,48,24,24,0,0,0,48,24ZM12,24,24,12v9H36v6H24v9Z" />
    </svg>
  )
}

BackIcon.defaultProps = {
  color: 'primary',
  size: 'sm'
}

export default BackIcon
