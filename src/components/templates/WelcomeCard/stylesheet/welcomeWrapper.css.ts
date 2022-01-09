import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/application/common/breakpoints.css'

export const welcomeWrapper = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  '@media': {
    [breakpoints.mobile]: {
      top: '0%',
      left: '0%',
      transform: 'translate(0%, 0%)'
    }
  }
})
