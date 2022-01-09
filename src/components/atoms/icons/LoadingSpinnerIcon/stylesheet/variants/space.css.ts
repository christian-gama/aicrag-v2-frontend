import { styleVariants } from '@vanilla-extract/css'

export const space = styleVariants({
  sm: {
    margin: '0 .5rem'
  },

  md: {
    margin: '0 1rem'
  },

  lg: {
    margin: '0 2rem'
  }
})
