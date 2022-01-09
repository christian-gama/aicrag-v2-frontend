import { keyframes } from '@vanilla-extract/css'

export const fromBottom = keyframes({
  '0%': {
    bottom: '-100%'
  },
  '80%': {
    bottom: '60%'
  },
  '100%': {
    bottom: '50%'
  }
})
