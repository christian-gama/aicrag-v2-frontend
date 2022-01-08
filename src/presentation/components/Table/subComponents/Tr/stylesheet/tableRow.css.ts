import { createGlobalTheme, style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { breakpoints } from '@/application/common/breakpoints.css'
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

export const tableRow = style({
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
  },

  '@media': {
    [breakpoints.mobile]: {
      gridTemplateColumns: 'repeat(auto-fill, minmax(14%, 1fr))',
      padding: '0 2.4rem',
      gap: '1.6rem',
      height: '6.6rem',
      marginTop: '1rem',
      maxHeight: '6.6rem',
      minHeight: '6.6rem'
    }
  }
})
