import { styleVariants } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const color = styleVariants({
  danger: {
    backgroundColor: vars.colors['danger-50']
  },

  info: {
    backgroundColor: vars.colors['info-50']
  },

  default: {
    backgroundColor: vars.colors['gray-50']
  }
})
