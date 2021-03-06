import { InfoCircleIconRecipeVariants } from './stylesheet'
import * as classes from './stylesheet'

type InfoCircleIconProps = {
  color?: InfoCircleIconRecipeVariants['color']
  size?: InfoCircleIconRecipeVariants['size']
}

export const InfoCircleIcon: React.FC<InfoCircleIconProps> = ({
  color,
  size
}) => {
  const infoCircleStyle = classes.infoCircleIconRecipe({
    color,
    size
  })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-testid="info-circle-icon"
      className={infoCircleStyle}
      viewBox="0 0 48 48"
    >
      <path
        d="M28.38,18.8V13.957H23.647V18.8Zm0,19.267V23.648H23.647V38.07ZM26.015,2.016A23.115,23.115,0,0,1,42.972,9.059a23.115,23.115,0,0,1,7.043,16.957,23.115,23.115,0,0,1-7.043,16.957,23.115,23.115,0,0,1-16.957,7.043A23.115,23.115,0,0,1,9.058,42.973,23.115,23.115,0,0,1,2.015,26.016,23.115,23.115,0,0,1,9.058,9.059,23.115,23.115,0,0,1,26.015,2.016Z"
        transform="translate(-2.015 -2.016)"
      />
    </svg>
  )
}

InfoCircleIcon.defaultProps = {
  color: 'primary',
  size: 'md'
}
