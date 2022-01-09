import { styleVariants } from '@vanilla-extract/css'
import { breakpoints } from '@/application/common/breakpoints.css'

export const size = styleVariants({
  sm: {
    width: '13rem',
    height: '4.4rem',

    '@media': {
      [breakpoints.mobile]: {
        width: '11.2rem',
        height: '4.2rem'
      }
    }
  },

  md: {
    width: '16rem',
    height: '4.8rem',

    '@media': {
      [breakpoints.mobile]: {
        width: '14rem',
        height: '4.4rem'
      }
    }
  },

  lg: {
    width: '25rem',
    height: '4.8rem',

    '@media': {
      [breakpoints.mobile]: {
        width: '23.6rem',
        height: '4.4rem'
      }
    }
  },

  xlg: {
    width: '34rem',
    height: '4.8rem',

    '@media': {
      [breakpoints.mobile]: {
        width: '30rem',
        height: '4.4rem'
      }
    }
  }
})
