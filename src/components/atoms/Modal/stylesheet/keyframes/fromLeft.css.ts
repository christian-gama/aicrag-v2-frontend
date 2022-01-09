import { keyframes } from '@vanilla-extract/css'

export const fromLeft = keyframes({
  '0%': {
    left: '-100%'
  },
  '80%': {
    left: '60%'
  },
  '100%': {
    left: '50%'
  }
})
