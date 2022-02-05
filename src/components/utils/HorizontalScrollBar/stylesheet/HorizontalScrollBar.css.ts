import { style, createGlobalTheme } from '@vanilla-extract/css'
import { vars, breakpoints } from '@/components/_settings'

export const horizontalScrollBarVars = createGlobalTheme(':root', {
  width: 'max-content'
})

export const horizontalScrollBar = style({
  width: horizontalScrollBarVars.width,
  maxWidth: horizontalScrollBarVars.width,
  paddingBottom: '1.6rem',
  msOverflowX: 'auto',
  overflowX: 'auto',

  '::-webkit-scrollbar': {
    width: '8px',
    height: '8px'
  },

  '::-webkit-scrollbar-track': {
    backgroundColor: vars.colors['gray-50']
  },

  '::-webkit-scrollbar-thumb': {
    backgroundColor: vars.colors['navy-500'],
    borderRadius: '5px'
  },

  '@media': {
    [breakpoints.desktop]: {
      overflowX: 'auto',
      whiteSpace: 'nowrap'
    },

    [breakpoints.mobile]: {
      paddingBottom: '1.2rem',
      overflowX: 'auto',
      whiteSpace: 'nowrap'
    }
  }
})
