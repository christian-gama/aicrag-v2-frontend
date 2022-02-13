import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings'

export const insertContentIcon = style({
  width: '24rem',
  height: '24rem',

  '@media': {
    [breakpoints.mobile]: {
      width: '20rem',
      height: '20rem'
    }
  }
})
