import { styleVariants } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const color = styleVariants({
  main: {
    fill: vars.colors['navy-600']
  },

  white: {
    fill: vars.colors.white
  }
})