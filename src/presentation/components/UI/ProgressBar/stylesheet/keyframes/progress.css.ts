import { keyframes } from '@vanilla-extract/css'

export const progress = keyframes({
  '0%': {
    width: '0%',
    transform: 'translateX(0)'
  },

  '50%': {
    width: '100%',
    transform: 'translateX(0)'
  },

  '100%': {
    transform: 'translateX(100vw)'
  }
})
