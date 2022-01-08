import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/application/common/breakpoints.css'

export const timer = style({
  display: 'flex',
  alignItems: 'center',

  '@media': {
    [breakpoints.mobile]: {
      marginBottom: '3.2rem'
    }
  }
})
