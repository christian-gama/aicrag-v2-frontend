import { styleVariants } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const type = styleVariants({
  success: {
    backgroundColor: vars.colors['success-500']
  },

  error: {
    backgroundColor: vars.colors['danger-500']
  },

  info: {
    backgroundColor: vars.colors['info-500']
  }
})
