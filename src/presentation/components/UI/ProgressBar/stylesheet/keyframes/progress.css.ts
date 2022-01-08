import { keyframes } from '@vanilla-extract/css'

export const progress = keyframes({
  '0%': {
    width: '0vw',
    transform: 'translateX(0)'
  },

  '50%': {
    width: '100vw',
    transform: 'translateX(0)'
  },

  '100%': {
    transform: 'translateX(100vw)'
  }
})
