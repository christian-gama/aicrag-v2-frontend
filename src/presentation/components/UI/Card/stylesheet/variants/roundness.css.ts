import { styleVariants } from '@vanilla-extract/css'

export const roundness = styleVariants({
  sm: {
    borderRadius: '3px'
  },

  md: {
    borderRadius: '5px'
  },

  lg: {
    borderRadius: '10px'
  },

  xl: {
    borderRadius: '20px'
  }
})
