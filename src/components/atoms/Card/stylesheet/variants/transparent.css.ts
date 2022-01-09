import { styleVariants } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const transparent = styleVariants({
  true: {
    backgroundColor: vars.colors.transparent
  },

  false: {
    backgroundColor: vars.colors.white
  }
})
