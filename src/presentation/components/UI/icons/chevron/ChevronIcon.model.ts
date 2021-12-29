import { ChevronIconVariants } from './ChevronIcon.css'

type ChevronIconProps = {
  color?: ChevronIconVariants['color']
  direction: NonNullable<ChevronIconVariants['direction']>
  size?: ChevronIconVariants['size']
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export default ChevronIconProps
