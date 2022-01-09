import { styleVariants } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const transparent = styleVariants({
  true: {
    backgroundColor: vars.colors.transparent
  },

  false: {
    backgroundColor: vars.colors.white
  }
})
