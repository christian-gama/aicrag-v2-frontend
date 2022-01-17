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
  gap: '3.6rem',
  marginBottom: '6rem',
  width: '100%'
})

export const forgotPasswordFormForgotPasswordWrapper = style({
  alignItems: 'center',
  backgroundColor: vars.colors['gray-50'],
  borderRadius: '0 0 5px 5px',
  bottom: '0',
  display: 'flex',
  height: '9rem',
  justifyContent: 'center',
  left: '0',
  position: 'absolute',
  width: '100%'
})
