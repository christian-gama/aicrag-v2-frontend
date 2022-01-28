import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings/breakpoints.css'
import { vars } from '@/components/_settings/vars.css'

export const left = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: vars.colors.gradient,
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
