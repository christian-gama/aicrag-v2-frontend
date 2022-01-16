import { createGlobalTheme, style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings/breakpoints.css'

export const windowDimensionVars = createGlobalTheme(':root', {
  height: ''
})

export const entryCard = style({
  position: 'relative',
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
      minHeight: windowDimensionVars.height,
      height: '100%',
      margin: '0 auto',
      padding: '1.2rem 1.6rem'
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

export const entryCardWrapper = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  '@media': {
    [breakpoints.mobile]: {
      top: '0%',
      left: '0%',
      transform: 'translate(0%, 0%)'
    }
  }
})
