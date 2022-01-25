import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings/breakpoints.css'
import { vars } from '@/components/_settings/vars.css'

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

export const forgotPasswordFormButtonWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem'
})

export const forgotPasswordFormInputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '6rem',
  width: '100%',
  gap: '3.6rem'
})

export const forgotPasswordFormForgotPasswordWrapper = style({
  display: 'flex',
  position: 'absolute',
  bottom: '0',
  left: '0',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '0 0 5px 5px',
  backgroundColor: vars.colors['gray-50'],
  width: '100%',
  height: '9rem'
})
