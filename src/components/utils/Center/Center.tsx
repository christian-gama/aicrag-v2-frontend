import { CenterVariants } from './stylesheet'
import * as classes from './stylesheet'

type CenterProps = {
  stickMobile?: CenterVariants['stickMobile']
}

export const Center: React.FC<CenterProps> = ({ stickMobile, children }) => {
  return (
    <div
      className={classes.center({
        stickMobile: !!stickMobile
      })}
      data-testid="center"
    >
      {children}
    </div>
  )
}
