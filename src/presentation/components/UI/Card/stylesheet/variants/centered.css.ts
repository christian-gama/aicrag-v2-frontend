import { styleVariants } from '@vanilla-extract/css'

export const centered = styleVariants({
  true: {
    marginRight: 'auto',
    marginLeft: 'auto'
  }
})
