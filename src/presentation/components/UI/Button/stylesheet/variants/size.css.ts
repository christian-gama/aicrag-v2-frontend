import { styleVariants } from '@vanilla-extract/css'

export const size = styleVariants({
  sm: { width: '13rem', height: '4.4rem' },
  md: { width: '16rem', height: '4.8rem' },
  lg: { width: '25rem', height: '4.8rem' },
  xlg: { width: '34rem', height: '4.8rem' }
})
