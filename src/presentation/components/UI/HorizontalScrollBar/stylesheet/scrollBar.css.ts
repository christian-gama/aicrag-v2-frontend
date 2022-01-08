import { style } from '@vanilla-extract/css'
import { breakpoints } from '@/application/common/breakpoints.css'
import { vars } from '@/application/common/stylesheet/vars.css'

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
    [breakpoints.desktop]: {
      overflowX: 'auto',
      msOverflowX: 'auto',
      whiteSpace: 'nowrap'
    },

    [breakpoints.mobile]: {
      overflowX: 'auto',
      whiteSpace: 'nowrap',
      msOverflowX: 'auto',
      paddingBottom: '1.2rem'
    }
  }
})
