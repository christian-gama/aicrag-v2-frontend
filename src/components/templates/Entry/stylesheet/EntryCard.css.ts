import { createGlobalTheme, style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings'

export const windowDimensionVars = createGlobalTheme(':root', {
  height: ''
})

export const entryCard = style({
  position: 'relative',
  width: '60rem',
  height: windowDimensionVars.height,

  '@media': {
    [breakpoints.tablet]: {
      width: '50rem'
    },

    [breakpoints.mobile]: {
      margin: '0 auto',
      width: '100vw',
      height: '100%',
      minHeight: windowDimensionVars.height
    }
  }
})
