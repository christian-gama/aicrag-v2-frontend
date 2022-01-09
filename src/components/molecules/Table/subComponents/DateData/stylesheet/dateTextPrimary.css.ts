import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/application/common/breakpoints.css'

export const dateTextPrimary = style({
  fontSize: '2.4rem',
  lineHeight: '1.2',

  '@media': {
    [breakpoints.mobile]: {
      fontSize: '2rem',
      lineHeight: '1.2'
    }
  }
})
