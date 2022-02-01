import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings'

export const forgotPasswordHeader = style({
  alignItems: 'center',
  display: 'grid',
  gridTemplateColumns: 'max-content 1fr',
  height: '14rem',
  justifyItems: 'center',
  padding: '0 4rem',

  '@media': {
    [breakpoints.mobile]: {
      height: '12rem',
      padding: '0 1.2rem',
      gap: '1.6rem'
    }
  }
})

export const forgotPassword = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '4rem',

  '@media': {
    [breakpoints.mobile]: {
      padding: '4rem 1.2rem'
    }
  }
})

export const forgotPasswordInputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '5.6rem',
  width: '100%',
  gap: '3.6rem'
})
