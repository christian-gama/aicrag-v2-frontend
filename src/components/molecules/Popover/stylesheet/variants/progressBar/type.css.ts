import { styleVariants } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const type = styleVariants({
  success: {
    backgroundColor: vars.colors['success-700']
  },

  error: {
    backgroundColor: vars.colors['danger-700']
  },

  info: {
    backgroundColor: vars.colors['info-700']
  }
})
