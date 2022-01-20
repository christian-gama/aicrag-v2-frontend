import { createGlobalTheme, style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { breakpoints } from '@/components/_settings/breakpoints.css'
import { vars } from '@/components/_settings/vars.css'

export const tableRowVars = createGlobalTheme(':root', {
  roundness: '5px',
  row: {
    gap: '2.8rem',
    height: '7.6rem',
    horizontalPadding: '3.2rem',
    width: '90rem'
  }
})

export const tableRow = style({
  alignItems: 'center',
  backgroundColor: vars.colors.white,
  borderRadius: tableRowVars.roundness,
  boxShadow: vars.shadow.xsm,
  display: 'grid',
  gap: tableRowVars.row.gap,
  gridTemplateColumns: 'repeat(auto-fit, minmax(16%, 1fr))',
  alignContent: 'center',
  height: tableRowVars.row.height,
  marginTop: calc.divide(tableRowVars.row.height, 6),
  maxHeight: tableRowVars.row.height,
  maxWidth: tableRowVars.row.width,
  minWidth: tableRowVars.row.width,
  padding: `0 ${tableRowVars.row.horizontalPadding}`,
  transition: 'transform 0.2s ease-in-out',
  width: tableRowVars.row.width,

  selectors: {
    'thead > &': {
      backgroundColor: vars.colors['navy-500'],
      color: vars.colors.white
    }
  },

  '@media': {
    [breakpoints.mobile]: {
      height: '6.6rem',
      marginTop: '1rem',
      maxHeight: '6.6rem',
      minHeight: '6.6rem',
      padding: '0 2.4rem'
    }
  }
})
