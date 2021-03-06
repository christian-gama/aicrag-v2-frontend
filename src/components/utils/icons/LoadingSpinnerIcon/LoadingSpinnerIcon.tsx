import { LoadingSpinnerVariants } from './stylesheet'
import * as classes from './stylesheet'

type LoadingSpinnerIconProps = {
  style?: {
    color?: LoadingSpinnerVariants['color']
    speed?: LoadingSpinnerVariants['speed']
    space?: LoadingSpinnerVariants['space']
    size?: LoadingSpinnerVariants['size']
  }
}

export const LoadingSpinnerIcon: React.FC<LoadingSpinnerIconProps> = ({
  style
}) => {
  const loadingSpinnerStyle = classes.loadingSpinnerIconRecipe({
    ...style
  })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-testid="loading-spinner-icon"
      className={loadingSpinnerStyle}
      viewBox="0 0 48 48"
    >
      <path
        id="spinner-icon"
        d="M49,25.3a26.161,26.161,0,0,0-2.061-9.721,25.351,25.351,0,0,0-5.47-8.094A24.254,24.254,0,0,0,33.483,2.2a23.353,23.353,0,0,0-18.371.37A23.751,23.751,0,0,0,7.529,8.046a24.474,24.474,0,0,0-4.943,7.988A24.806,24.806,0,0,0,2.943,34.4,23.76,23.76,0,0,0,8.077,41.98a22.694,22.694,0,0,0,7.481,4.935,21.846,21.846,0,0,0,17.185-.37,22.223,22.223,0,0,0,7.081-5.132,22.862,22.862,0,0,0,5.892-12.659c.06,0,.121.006.183.006a3.148,3.148,0,0,0,3.1-3.2c0-.09,0-.179-.011-.267H49Zm-4.92,8.5a22.126,22.126,0,0,1-4.8,7.057A21.174,21.174,0,0,1,32.3,45.437a20.339,20.339,0,0,1-16-.37,20.648,20.648,0,0,1-6.58-4.784A21.434,21.434,0,0,1,5.8,17.412a20.54,20.54,0,0,1,4.463-6.539A19.668,19.668,0,0,1,16.746,6.63,18.832,18.832,0,0,1,31.559,7a19.133,19.133,0,0,1,6.078,4.437A19.679,19.679,0,0,1,42.8,25.293h.011c-.008.088-.011.176-.011.267a3.162,3.162,0,0,0,2.762,3.18,22.666,22.666,0,0,1-1.489,5.048Z"
      />
    </svg>
  )
}

LoadingSpinnerIcon.defaultProps = {
  style: {
    speed: 'normal',
    color: 'main',
    size: 'md',
    space: 'md'
  }
}
