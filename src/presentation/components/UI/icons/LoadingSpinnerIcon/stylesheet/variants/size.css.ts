import { styleVariants } from '@vanilla-extract/css'

export const size = styleVariants({
  sm: {
    width: '2.6rem',
    height: '2.6rem'
  },

  md: {
    width: '3.6rem',
    height: '3.6rem'
  },

  lg: {
    width: '6.7rem',
    height: '6.7rem'
  }
})
