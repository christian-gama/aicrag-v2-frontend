import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings'

export const tableStyle = style({
  margin: '0.4rem',
  fontFamily: vars.font.p.fontFamily,
  fontSize: vars.font.p.fontSize
})

export const tableCell = style({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  height: '100%'
})

export const tableCellSpan = style({
  overflow: 'hidden',
  textAlign: 'start',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  msTextOverflow: 'ellipsis'
})
