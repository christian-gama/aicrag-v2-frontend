import * as classes from './stylesheet'
import { CheckIconVariants } from './stylesheet'

type CheckIconProps = {
  color?: CheckIconVariants['color']
  size?: CheckIconVariants['size']
}

export const CheckIcon: React.FC<CheckIconProps> = ({ color, size }) => {
  const checkIconStyle = classes.checkIconRecipe({
    color,
    size
  })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-testid="check-icon"
      className={checkIconStyle}
      viewBox="0 0 64 48"
    >
      <path
        d="M65.89,14.592a3.863,3.863,0,0,1-1.157,2.746L29.222,52.086a4.043,4.043,0,0,1-5.613,0L3.047,31.966a3.836,3.836,0,0,1,0-5.492l5.615-5.495a4.043,4.043,0,0,1,5.613,0L26.416,32.9,53.5,6.352a4.043,4.043,0,0,1,5.613,0l5.615,5.495a3.878,3.878,0,0,1,1.157,2.746Z"
        transform="translate(-1.89 -5.219)"
      />
    </svg>
  )
}

CheckIcon.defaultProps = {
  color: 'primary',
  size: 'md'
}
