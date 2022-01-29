import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings'

export const tableStyle = style({
  fontFamily: vars.font.p.fontFamily,
  fontSize: vars.font.p.fontSize
})

export const tableCell = style({
  position: 'relative',
  height: '100%',
  overflow: 'hidden',
  textAlign: 'start',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  msTextOverflow: 'ellipsis'
})

export const tableSpanShowingup = style({
  display: 'block',
  marginBottom: '0.8rem',
  fontFamily: vars.font.hint.fontFamily,
  fontSize: vars.font.hint.fontSize
})
