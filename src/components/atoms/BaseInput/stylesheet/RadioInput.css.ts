import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings'

export const radioInputContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem'
})

export const radioInputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
})

export const radioInput = style({
  width: '2rem',
  height: '2rem',

  ':hover': {
    cursor: 'pointer'
  }
})

export const radioLabel = style({
  fontFamily: vars.font.p.fontFamily,
  fontSize: vars.font.p.fontSize,

  ':hover': {
    cursor: 'pointer'
  }
})
