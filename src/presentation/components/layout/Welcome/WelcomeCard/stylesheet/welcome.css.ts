import { createGlobalTheme, style } from '@vanilla-extract/css'
import { breakpoints } from '@/application/common/breakpoints.css'

export const dimensionVars = createGlobalTheme(':root', {
  height: ''
})

export const welcome = style({
  height: '65rem',
  width: '60rem',
  padding: '3.6rem 5rem',

  '@media': {
    [breakpoints.tablet]: {
      width: '50rem',
      padding: '2rem 2.8rem'
    },

    [breakpoints.mobile]: {
      width: '100vw',
      minHeight: dimensionVars.height,
      height: '100%',
      margin: '0 auto',
      padding: '1.2rem 1.6rem'
    }
  }
})
