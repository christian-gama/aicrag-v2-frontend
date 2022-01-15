import { createGlobalTheme, style } from '@vanilla-extract/css'
import { breakpoints } from '@/components/_settings/breakpoints.css'
import { vars } from '@/components/_settings/vars.css'

export const horizontalScrollBarVars = createGlobalTheme(':root', {
  width: '100%'
})

export const horizontalScrollBar = style({
  width: horizontalScrollBarVars.width,
  maxWidth: horizontalScrollBarVars.width,
  paddingBottom: '1.6rem',
  msOverflowX: 'auto',
  overflowX: 'auto',

  '::-webkit-scrollbar': {
    height: '8px',
    width: '8px'
  },

  '::-webkit-scrollbar-track': {
    backgroundColor: vars.colors['gray-100']
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
      overflowX: 'auto',
      whiteSpace: 'nowrap',
      paddingBottom: '1.2rem'
    }
  }
})
