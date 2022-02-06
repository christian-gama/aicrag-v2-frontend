import { createGlobalTheme, style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings'

export const tableWrapper = style({
  position: 'relative'
})

export const tableContentWrapper = style({
  position: 'absolute',
  top: '3.2rem',
  left: '50%',
  transform: 'translateX(-50%)'
})

export const tableCellVar = createGlobalTheme(':root', {
  justifyContent: 'flex-start'
})

export const tableContent = style({
  margin: '0 0.4rem',
  width: '90rem',
  fontFamily: vars.font.p.fontFamily,
  fontSize: vars.font.p.fontSize
})

export const tableCell = style({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  justifyContent: tableCellVar.justifyContent,
  height: '100%'
})

export const tableCellSpan = style({
  overflow: 'hidden',
  textAlign: 'start',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  msTextOverflow: 'ellipsis'
})

export const tableSpanShowingup = style({
  top: '-2rem',
  position: 'absolute',
  display: 'block',
  fontFamily: vars.font.hint.fontFamily,
  fontSize: vars.font.hint.fontSize
})
