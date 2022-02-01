import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings'

export const signMenuWrapper = style({
  marginBottom: '3.2rem',

  '@media': {
    [breakpoints.mobile]: {
      width: '100vw',
      marginLeft: '-1.6rem',
      marginRight: '-1.6rem'
    }
  }
})

export const signHeader = style({
  display: 'flex',
  gap: '1rem',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '3.6rem'
})

export const signWrapper = style({
  padding: '3.6rem 5rem',

  '@media': {
    [breakpoints.tablet]: {
      padding: '2rem 2.8rem'
    },

    [breakpoints.mobile]: {
      padding: '1.2rem 1.6rem'
    }
  }
})
