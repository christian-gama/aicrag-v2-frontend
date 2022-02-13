import { createGlobalTheme, style } from '@vanilla-extract/css'
import { breakpoints, vars } from '@/components/_settings'

export const tableWrapper = style({
  display: 'grid',
  position: 'relative',
  gridTemplateColumns: '1fr 1fr 1fr',
  marginTop: '1.6rem'
})

export const tableFilter = style({
  width: '100%',
  gridColumn: '2 / 3',
  marginBottom: '0.8rem'
})

export const tableContentWrapper = style({
  gridColumn: '2/3'
})

export const tableCellVar = createGlobalTheme(':root', {
  justifyContent: 'flex-start'
})

export const tableContent = style({
  margin: '0 0.6rem',
  position: 'relative',
  width: '90rem',
  fontFamily: vars.font.p.fontFamily,
  fontSize: vars.font.p.fontSize,

  '@media': {
    [breakpoints.widescreen]: {
      width: '80rem'
    },

    [breakpoints.desktop]: {
      width: '98vw'
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
  display: 'block',
  fontFamily: vars.font.hint.fontFamily,
  fontSize: vars.font.hint.fontSize
})

export const tableHeading = style({
  cursor: 'pointer'
})
