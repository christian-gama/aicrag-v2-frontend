import { createGlobalTheme, style } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

const roundness = '5px'

const row = {
  height: '7.6rem',
  width: '90rem',
  horizontalPadding: '3.2rem',
  gap: '2.4rem'
}

export const tableVars = createGlobalTheme(':root', {
  roundness,
  row
})

export const baseWrapperStyle = style({
  alignItems: 'center',
  borderRadius: tableVars.roundness,
  boxShadow: vars.shadow.xsm,
  display: 'grid',
  gap: tableVars.row.gap,
  gridTemplateColumns: 'repeat(auto-fill, minmax(16%, 1fr))',
  height: tableVars.row.height,
  maxHeight: tableVars.row.height,
  maxWidth: tableVars.row.width,
  padding: `0 ${tableVars.row.horizontalPadding}`,
  width: tableVars.row.width
})
