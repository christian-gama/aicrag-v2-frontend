import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const signInForm = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

export const signInFormButtonWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem'
})

export const signInFormInputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.6rem',
  marginBottom: '6rem',
  width: '100%'
})

export const signInFormForgotPasswordWrapper = style({
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
