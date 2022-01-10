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

export const signInFormForgotPassword = style({
  color: vars.colors.text.default,
  fontFamily: vars.font.hint.fontFamily,
  fontSize: vars.font.hint.fontSize,
  marginTop: '2rem'
})

export const signInFormInputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '3.6rem',
  marginBottom: '6rem',
  width: '100%'
})
