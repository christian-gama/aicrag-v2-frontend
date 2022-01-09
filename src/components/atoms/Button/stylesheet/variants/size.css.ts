import { styleVariants } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const size = styleVariants({
  sm: {
    width: '13rem',
    height: '4.4rem',

    '@media': {
      [vars.breakpoints.mobile]: {
        width: '11.2rem',
        height: '4.2rem'
      }
    }
  },

  md: {
    width: '16rem',
    height: '4.8rem',

    '@media': {
      [vars.breakpoints.mobile]: {
        width: '14rem',
        height: '4.4rem'
      }
    }
  },

  lg: {
    width: '25rem',
    height: '4.8rem',

    '@media': {
      [vars.breakpoints.mobile]: {
        width: '23.6rem',
        height: '4.4rem'
      }
    }
  },

  xlg: {
    width: '34rem',
    height: '4.8rem',

    '@media': {
      [vars.breakpoints.mobile]: {
        width: '30rem',
        height: '4.4rem'
      }
    }
  }
})
