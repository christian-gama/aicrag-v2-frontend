import { createGlobalTheme, style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { vars, breakpoints } from '@/components/_settings'

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
      backgroundColor: vars.colors['cyan-900'],
      color: vars.colors.white
    },

    'tbody > &:hover': {
      transform: 'scale(1.01)'
    }
  },

  '@media': {
    [breakpoints.widescreen]: {
      gap: '1.2rem',
      minWidth: '80rem',
      width: '80rem',
      maxWidth: '80rem'
    },

    [breakpoints.mobile]: {
      marginTop: '1rem',
      padding: '0 2.4rem',
      height: '6.6rem',
      minHeight: '6.6rem',
      maxHeight: '6.6rem'
    }
  }
})
