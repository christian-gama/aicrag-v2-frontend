import { style } from '@vanilla-extract/css'
import { vars, breakpoints } from '@/components/_settings'

export const left = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: vars.colors.gradient.primary,
  width: '50vw',
  height: '100vh',

  '@media': {
    [breakpoints.desktop]: {
      width: '100vw',
      height: '30vh',
      minHeight: '16rem'
    },

    [breakpoints.mobile]: {
      height: '20vh'
    }
  }
})
