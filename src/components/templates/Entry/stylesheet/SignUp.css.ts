import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings'

export const signUp = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

export const signUpInputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '3.6rem',
  width: '100%',
  gap: '2rem',

  '@media': {
    [breakpoints.widescreen]: {
      marginBottom: '2.4rem',
      gap: '1.6rem'
    },

    [breakpoints.mobile]: {
      marginBottom: '3.6rem',
      gap: '2rem'
    }
  }
})
