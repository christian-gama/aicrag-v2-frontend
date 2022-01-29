import React from 'react'
import * as style from './stylesheet'
import { CenterVariants } from './stylesheet'

type CenterProps = {
  stickMobile?: CenterVariants['stickMobile']
}

const Center: React.FC<CenterProps> = ({ stickMobile, children }) => {
  return (
    <div
      className={style.center({
        stickMobile: !!stickMobile
      })}
      data-testid="center"
    >
      {children}
    </div>
  )
}

export default Center
