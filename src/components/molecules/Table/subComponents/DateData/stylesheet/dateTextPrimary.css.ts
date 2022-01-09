import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const dateTextPrimary = style({
  fontSize: '2.4rem',
  lineHeight: '1.2',

  '@media': {
    [vars.breakpoints.mobile]: {
      fontSize: '2rem',
      lineHeight: '1.2'
    }
  }
})
