import { styleVariants } from '@vanilla-extract/css'

export const sizeVariants = styleVariants({
  xsm: {
    width: '0.9rem',
    minWidth: '0.9rem'
  },

  sm: {
    width: '1.6rem',
    minWidth: '1.6rem'
  },

  md: {
    width: '2rem',
    minWidth: '2rem'
  },

  lg: {
    width: '2.4rem',
    minWidth: '2.4rem'
  },

  xlg: {
    width: '2.7rem',
    minWidth: '2.7rem'
  }
})
