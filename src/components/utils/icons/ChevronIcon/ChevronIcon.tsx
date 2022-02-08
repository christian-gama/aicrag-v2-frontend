import { ChevronIconVariants } from './stylesheet'
import * as classes from './stylesheet'

type ChevronIconProps = {
  direction?: NonNullable<ChevronIconVariants['direction']>
  color?: ChevronIconVariants['color']
  size?: ChevronIconVariants['size']
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export const ChevronIcon: React.FC<ChevronIconProps> = ({
  direction,
  onClick,
  color,
  size
}) => {
  const chevronStyle = classes.chevronIconRecipe({
    direction,
    color,
    size
  })

  return (
    <div data-testid={'chevron-icon'} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={chevronStyle}
        viewBox="0 0 27 48"
      >
        <path
          d="M28.217,28.513,8.417,49.875a2.321,2.321,0,0,1-3.458,0L2.649,47.384a2.788,2.788,0,0,1,0-3.726L18.337,26.648,2.645,9.638a2.788,2.788,0,0,1,0-3.726L4.959,3.42a2.321,2.321,0,0,1,3.458,0l19.8,21.362A2.787,2.787,0,0,1,28.217,28.513Z"
          transform="translate(-1.933 -2.648)"
        />
      </svg>
    </div>
  )
}

ChevronIcon.defaultProps = {
  direction: 'right',
  color: 'main',
  size: 'md'
}
