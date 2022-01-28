import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings/breakpoints.css'

export const wrapper = style({
  display: 'flex',

  '@media': {
    [breakpoints.desktop]: {
      flexDirection: 'column'
    }
  }
})
