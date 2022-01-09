import { styleVariants } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const color = styleVariants({
  main: {
    fill: vars.colors['navy-600']
  },

  white: {
    fill: vars.colors.white
  }
})
