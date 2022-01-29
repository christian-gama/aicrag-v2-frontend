import { createGlobalTheme, style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings/breakpoints.css'

export const windowDimensionVars = createGlobalTheme(':root', {
  height: ''
})

export const entryCard = style({
  position: 'relative',
  padding: '3.6rem 5rem',
  width: '60rem',
  height: '68rem',

  '@media': {
    [breakpoints.tablet]: {
      padding: '2rem 2.8rem',
      width: '50rem'
    },

    [breakpoints.mobile]: {
      margin: '0 auto',
      padding: '1.2rem 1.6rem',
      width: '100vw',
      height: '100%',
      minHeight: windowDimensionVars.height
    }
  }
})

export const entryCardMenuWrapper = style({
  marginBottom: '3.2rem',

  '@media': {
    [breakpoints.mobile]: {
      width: '100vw',
      marginLeft: '-1.6rem',
      marginRight: '-1.6rem'
    }
  }
})

export const entryCardHeader = style({
  display: 'flex',
  gap: '1rem',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '3.6rem'
})
