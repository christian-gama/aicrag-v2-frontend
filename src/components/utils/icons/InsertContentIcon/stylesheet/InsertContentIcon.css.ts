import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings'

export const insertContentIcon = style({
  width: '32rem',
  height: '32rem',

  '@media': {
    [breakpoints.mobile]: {
      width: '28rem',
      height: '28rem'
    }
  }
})
