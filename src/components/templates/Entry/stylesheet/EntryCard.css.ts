import { style } from '@vanilla-extract/css'
import { breakpoints, windowHeightVars } from '@/components/_settings'

export const entryCard = style({
  position: 'relative',
  width: '60rem',
  height: windowHeightVars.height,

  '@media': {
    [breakpoints.widescreen]: {
      width: '54rem',
      height: windowHeightVars.height
    },

    [breakpoints.tablet]: {
      width: '50rem'
    },

    [breakpoints.mobile]: {
      margin: '0 auto',
      width: '100vw',
      height: '100%',
      minHeight: windowHeightVars.height
    }
  }
})
