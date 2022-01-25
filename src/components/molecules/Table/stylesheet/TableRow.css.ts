import { createGlobalTheme, style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { breakpoints } from '@/components/_settings/breakpoints.css'
import { vars } from '@/components/_settings/vars.css'

export const tableRowVars = createGlobalTheme(':root', {
  roundness: '5px',
  row: {
    width: '90rem',
    height: '7.6rem',
    gap: '2.8rem',
    horizontalPadding: '3.2rem'
  }
})

export const tableRow = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(16%, 1fr))',
  alignContent: 'center',
  alignItems: 'center',
  transition: 'transform 0.2s ease-in-out',
  marginTop: calc.divide(tableRowVars.row.height, 6),
  borderRadius: tableRowVars.roundness,
  boxShadow: vars.shadow.xsm,
  backgroundColor: vars.colors.white,
  padding: `0 ${tableRowVars.row.horizontalPadding}`,
  width: tableRowVars.row.width,
  minWidth: tableRowVars.row.width,
  maxWidth: tableRowVars.row.width,
  height: tableRowVars.row.height,
  maxHeight: tableRowVars.row.height,
  gap: tableRowVars.row.gap,

  selectors: {
    'thead > &': {
      backgroundColor: vars.colors['navy-500'],
      color: vars.colors.white
    }
  },

  '@media': {
    [breakpoints.mobile]: {
      marginTop: '1rem',
      padding: '0 2.4rem',
      height: '6.6rem',
      minHeight: '6.6rem',
      maxHeight: '6.6rem'
    }
  }
})
