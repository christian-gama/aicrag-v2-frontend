import { style } from '@vanilla-extract/css'

export const textInput = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
  marginBottom: '5.4rem'
})

export const textInputButton = style({
  display: 'flex',
  justifyContent: 'flex-end',
  flex: '0.1',
  gap: '0.8rem'
})

export const textInputField = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  flex: '1',
  gap: '0rem'
})
