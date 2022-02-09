import { style } from '@vanilla-extract/css'
import { breakpoints, vars } from '@/components/_settings'

export const signIn = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

export const signInInputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '6rem',
  width: '100%',
  gap: '3.6rem',

  '@media': {
    [breakpoints.widescreen]: {
      marginBottom: '4rem'
    },

    [breakpoints.mobile]: {
      marginBottom: '6rem'
    }
  }
})

export const signInFooter = style({
  display: 'flex',
  position: 'absolute',
  bottom: '0',
  left: '0',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0 0 5px 5px',
  backgroundColor: vars.colors['gray-50'],
  width: '100%',
  height: '10rem',

  '@media': {
    [breakpoints.mobile]: {
      height: '10.8rem'
    }
  }
})
