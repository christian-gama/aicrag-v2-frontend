import { styleVariants } from '@vanilla-extract/css'

export const sizeVariants = styleVariants({
  sm: {
    width: '1.6rem',
    height: '1.6rem',
    minWidth: '1.6rem',
    minHeight: '1.6rem'
  },

  md: {
    width: '2rem',
    height: '2rem',
    minWidth: '2rem',
    minHeight: '2rem'
  },

  lg: {
    width: '2.4rem',
    height: '2.4rem',
    minWidth: '2.4rem',
    minHeight: '2.4rem'
  }
})
