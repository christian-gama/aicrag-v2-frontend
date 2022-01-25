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
  marginBottom: '6rem',
  width: '100%',
  gap: '3.6rem'
})

export const signInFormForgotPasswordWrapper = style({
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
