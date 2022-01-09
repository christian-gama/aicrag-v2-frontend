import { style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const scrollBar = style({
  width: '100%',
  paddingBottom: '1.6rem',

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
    [vars.breakpoints.desktop]: {
      overflowX: 'auto',
      msOverflowX: 'auto',
      whiteSpace: 'nowrap'
    },

    [vars.breakpoints.mobile]: {
      overflowX: 'auto',
      whiteSpace: 'nowrap',
      msOverflowX: 'auto',
      paddingBottom: '1.2rem'
    }
  }
})
