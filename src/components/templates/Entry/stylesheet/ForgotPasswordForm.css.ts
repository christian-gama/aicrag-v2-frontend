import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings'

export const forgotPasswordForm = style({
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

export const forgotPasswordFormInputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '5.6rem',
  width: '100%',
  gap: '3.6rem'
})
