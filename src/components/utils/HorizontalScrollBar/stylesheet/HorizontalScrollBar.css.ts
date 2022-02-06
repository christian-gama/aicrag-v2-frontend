import { style, createGlobalTheme } from '@vanilla-extract/css'
import { vars, breakpoints } from '@/components/_settings'

export const widthBreakpoints = createGlobalTheme(':root', {
  desktop: '92vw',
  widescreen: '67vw',
  default: '100%'
})

export const horizontalScrollBar = style({
  width: widthBreakpoints.default,
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
    [breakpoints.widescreen]: {
      width: widthBreakpoints.widescreen
    },

    [breakpoints.desktop]: {
      width: widthBreakpoints.desktop
    },

    [breakpoints.mobile]: {
      paddingBottom: '1.2rem'
    }
  }
})
