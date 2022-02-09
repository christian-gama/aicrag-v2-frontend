import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings'

export const signMenuWrapper = style({
  marginBottom: '3.2rem',

  '@media': {
    [breakpoints.widescreen]: {
      marginBottom: '2rem'
    },

    [breakpoints.mobile]: {
      marginBottom: '3.2rem',
      width: '100vw',
      marginLeft: '-1.6rem',
      marginRight: '-1.6rem'
    }
  }
})

export const signHeader = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '3.6rem',

  '@media': {
    [breakpoints.widescreen]: {
      marginBottom: '2rem'
    },

    [breakpoints.mobile]: {
      marginBottom: '3.6rem'
    }
  }
})

export const signWrapper = style({
  padding: '3.6rem 5rem',

  '@media': {
    [breakpoints.widescreen]: {
      padding: '2rem 3.6rem'
    },

    [breakpoints.tablet]: {
      padding: '2.4rem 2.8rem'
    },

    [breakpoints.mobile]: {
      padding: '2.4rem 1.6rem'
    }
  }
})
