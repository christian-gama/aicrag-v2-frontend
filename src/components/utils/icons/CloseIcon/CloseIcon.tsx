import { CloseIconVariants } from './stylesheet'
import * as classes from './stylesheet'

type CloseIconProps = {
  color?: CloseIconVariants['color']
  size?: CloseIconVariants['size']
}

export const CloseIcon: React.FC<CloseIconProps> = ({ color, size }) => {
  const closeIconStyle = classes.closeIconRecipe({
    color,
    size
  })

  return (
    <div className={classes.closeIconHitbox}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={closeIconStyle}
        data-testid="close-icon"
        viewBox="0 0 48 48"
      >
        <path
          d="M48,4.8,43.2,0,24,19.2,4.8,0,0,4.8,19.2,24,0,43.2,4.8,48,24,28.8,43.2,48,48,43.2,28.8,24Z"
          fillRule="evenodd"
        />
      </svg>
    </div>
  )
}

CloseIcon.defaultProps = {
  color: 'primary',
  size: 'md'
}
