
import { useWindowDimensions } from '@/components/_hooks'
import { LogoIcon } from '@/components/utils/icons'
import * as classes from './stylesheet'

export const Left: React.FC = () => {
  const { width } = useWindowDimensions()

  return (
    <div className={classes.left}>
      <LogoIcon size={width <= 520 ? 'md' : 'lg'} color="white" />
    </div>
  )
}
