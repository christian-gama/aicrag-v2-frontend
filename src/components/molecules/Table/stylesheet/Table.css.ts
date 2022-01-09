import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const tableStyle = style({
  fontFamily: vars.font.p.fontFamily,
  fontSize: vars.font.p.fontSize,
  margin: '0 auto'
})

export const tableCell = style({
  display: 'flex',
  height: '100%',
  alignItems: 'center'
})

export const tableSpanShowingup = style({
  display: 'block',
  fontSize: vars.font.hint.fontSize,
  fontFamily: vars.font.hint.fontFamily,
  marginBottom: '0.8rem'
})
