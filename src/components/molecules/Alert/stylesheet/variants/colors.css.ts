import { styleVariants } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const colors = styleVariants({
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
