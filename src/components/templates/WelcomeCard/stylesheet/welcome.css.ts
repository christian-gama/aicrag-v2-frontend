import { createGlobalTheme, style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const dimensionVars = createGlobalTheme(':root', {
  height: ''
})

export const welcome = style({
  height: '65rem',
  width: '60rem',
  padding: '3.6rem 5rem',

  '@media': {
    [vars.breakpoints.tablet]: {
      width: '50rem',
      padding: '2rem 2.8rem'
    },

    [vars.breakpoints.mobile]: {
      width: '100vw',
      minHeight: dimensionVars.height,
      height: '100%',
      margin: '0 auto',
      padding: '1.2rem 1.6rem'
    }
  }
})
