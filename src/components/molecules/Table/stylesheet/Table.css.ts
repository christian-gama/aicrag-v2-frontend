import { createGlobalTheme, style } from '@vanilla-extract/css'
import { breakpoints, vars } from '@/components/_settings'

export const tableWrapper = style({
  display: 'grid',
  position: 'relative',
  gridTemplateColumns: '1fr 1fr 1fr',
  marginTop: '3.2rem'
})

export const tableContentWrapper = style({
  gridColumn: '2/3'
})

export const tableCellVar = createGlobalTheme(':root', {
  justifyContent: 'flex-start'
})

export const tableContent = style({
  position: 'relative',
  margin: '0 0.7rem',
  width: '90rem',
  fontFamily: vars.font.p.fontFamily,
  fontSize: vars.font.p.fontSize,

  '@media': {
    [breakpoints.widescreen]: {
      width: '80rem'
    }
  }
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
