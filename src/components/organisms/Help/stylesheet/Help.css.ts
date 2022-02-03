import { style } from '@vanilla-extract/css'
import { breakpoints, vars } from '@/components/_settings'

export const help = style({
  position: 'relative',
  padding: '0.8rem 0',
  width: '50rem',
  maxHeight: '58rem',
  overflowY: 'scroll',

  '::-webkit-scrollbar': {
    width: '0.7rem',
    height: '0.7rem'
  },

  '::-webkit-scrollbar-thumb': {
    borderRadius: '0.4rem',
    backgroundColor: vars.colors['gray-300']
  },

  selectors: {
    '&::-webkit-scrollbar:hover': {
      cursor: 'pointer'
    }
  },

  '::-webkit-scrollbar-track': {
    backgroundColor: vars.colors.transparent
  },

  '@media': {
    [breakpoints.mobile]: {
      width: '100vw'
    }
  }
})

export const helpTextWrapper = style({
  padding: '4rem',
  paddingBottom: '0',
  textAlign: 'justify',
  hyphens: 'auto',

  '@media': {
    [breakpoints.mobile]: {
      padding: '1.2rem'
    }
  }
})

export const helpFooter = style({
  padding: '4rem',
  textAlign: 'center',
  fontWeight: 'bold',

  '@media': {
    [breakpoints.mobile]: {
      padding: '2.4rem 1.2rem'
    }
  }
})

export const helpNavHeaderWrapper = style({
  position: 'sticky',
  top: 0,
  left: 0,
  backgroundColor: 'white'
})
