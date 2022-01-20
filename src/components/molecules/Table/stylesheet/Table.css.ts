import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const tableStyle = style({
  fontFamily: vars.font.p.fontFamily,
  fontSize: vars.font.p.fontSize
})

export const tableCell = style({
  position: 'relative',
  height: '100%',
  textAlign: 'start',
  overflow: 'hidden',
  msTextOverflow: 'ellipsis',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
})

export const tableSpanShowingup = style({
  display: 'block',
  fontSize: vars.font.hint.fontSize,
  fontFamily: vars.font.hint.fontFamily,
  marginBottom: '0.8rem'
})
