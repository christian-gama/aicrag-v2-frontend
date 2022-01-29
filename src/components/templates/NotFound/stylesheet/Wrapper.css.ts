import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings'

export const wrapper = style({
  display: 'flex',

  '@media': {
    [breakpoints.desktop]: {
      flexDirection: 'column'
    }
  }
})
