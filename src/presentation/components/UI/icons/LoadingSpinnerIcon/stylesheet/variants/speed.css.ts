import { styleVariants } from '@vanilla-extract/css'

export const speed = styleVariants({
  slow: {
    animationDuration: '1.8s'
  },

  normal: {
    animationDuration: '1s'
  },

  fast: {
    animationDuration: '0.65s'
  }
})
