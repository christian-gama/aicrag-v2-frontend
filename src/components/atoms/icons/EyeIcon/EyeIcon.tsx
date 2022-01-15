import React from 'react'
import * as style from './stylesheet'
import { EyeIconVariants } from './stylesheet'

type EyeIconProps = {
  style?: {
    size?: EyeIconVariants['size']
    color?: EyeIconVariants['color']
  }
  onClick?: () => void
  showPassword: boolean
}

const EyeIcon: React.FC<EyeIconProps> = (props) => {
  const eyeIconStyle = style.eyeIconRecipe({
    color: props.style?.color,
    size: props.style?.size
  })

  const eyeOpenIcon = (
    <svg
      className={eyeIconStyle}
      data-testid="eye-open-icon"
      onClick={props.onClick}
      viewBox="0 0 60 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>EyeOpenIcon</title>
      <path
        id="eye-open-icon"
        d="M30.25,7.383a30.112,30.112,0,0,0-28,19,30.132,30.132,0,0,0,56,0A30.112,30.112,0,0,0,30.25,7.383Zm0,31.671A12.671,12.671,0,1,1,42.975,26.383,12.733,12.733,0,0,1,30.25,39.054Zm0-20.271a7.6,7.6,0,1,0,7.637,7.6A7.643,7.643,0,0,0,30.25,18.783Z"
      />
    </svg>
  )

  const eyeClosedIcon = (
    <svg
      className={eyeIconStyle}
      data-testid="eye-closed-icon"
      onClick={props.onClick}
      viewBox="0 0 60 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>EyeClosedIcon</title>
      <path
        id="eye-closed-icon"
        d="M30.256,14.6A12.7,12.7,0,0,1,42.991,27.237a12.159,12.159,0,0,1-.912,4.625l7.436,7.375a29.882,29.882,0,0,0,8.736-12A30.155,30.155,0,0,0,20.1,10.05l5.5,5.462A12.589,12.589,0,0,1,30.256,14.6ZM4.8,7.712l5.811,5.762,1.175,1.162a29.739,29.739,0,0,0-9.535,12.6A30.2,30.2,0,0,0,41.4,44.063l1.075,1.062L49.939,52.5l3.237-3.212L8.024,4.5ZM18.871,21.675l3.949,3.912a7.162,7.162,0,0,0-.2,1.638A7.6,7.6,0,0,0,30.256,34.8a7.18,7.18,0,0,0,1.65-.2l3.949,3.913A12.57,12.57,0,0,1,18.871,21.675Zm10.973-1.962,8.023,7.962.05-.4A7.6,7.6,0,0,0,30.281,19.7Z"
      />
    </svg>
  )

  return props.showPassword ? eyeClosedIcon : eyeOpenIcon
}

export default EyeIcon
