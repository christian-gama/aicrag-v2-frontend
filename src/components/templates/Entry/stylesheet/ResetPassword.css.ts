import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings'

export const resetPassword = style({
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

export const resetPasswordInputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '4.8rem',
  width: '100%',
  gap: '3.6rem'
})
