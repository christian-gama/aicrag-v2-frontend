import { styleVariants } from '@vanilla-extract/css'

export const centered = styleVariants({
  true: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
})
