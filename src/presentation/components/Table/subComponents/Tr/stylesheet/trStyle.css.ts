import { createGlobalTheme, style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
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

export const trStyle = style({
  alignItems: 'center',
  borderRadius: tableVars.roundness,
  boxShadow: vars.shadow.xsm,
  display: 'grid',
  gap: tableVars.row.gap,
  gridTemplateColumns: 'repeat(auto-fill, minmax(16%, 1fr))',
  height: tableVars.row.height,
  marginTop: calc.divide(tableVars.row.height, 6),
  maxHeight: tableVars.row.height,
  maxWidth: tableVars.row.width,
  padding: `0 ${tableVars.row.horizontalPadding}`,
  transition: 'transform 0.2s ease-in-out',
  width: tableVars.row.width,

  selectors: {
    'thead > &': {
      backgroundColor: vars.colors['navy-500'],
      color: vars.colors.white
    }
  }
})
