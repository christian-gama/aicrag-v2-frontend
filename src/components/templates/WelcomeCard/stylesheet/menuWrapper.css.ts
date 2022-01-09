import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const menuWrapper = style({
  marginBottom: '3.2rem',

  '@media': {
    [vars.breakpoints.mobile]: {
      width: '100vw',
      marginLeft: '-1.6rem',
      marginRight: '-1.6rem'
    }
  }
})
