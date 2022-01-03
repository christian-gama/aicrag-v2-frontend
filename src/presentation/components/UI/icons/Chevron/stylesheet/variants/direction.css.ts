import { styleVariants } from '@vanilla-extract/css'

export const direction = styleVariants({
  down: {
    transform: 'rotate(90deg)'
  },

  up: {
    transform: 'rotate(270deg)'
  },

  left: {
    transform: 'rotate(180deg)'
  },

  right: {
    transform: 'rotate(0deg)'
  }
})
