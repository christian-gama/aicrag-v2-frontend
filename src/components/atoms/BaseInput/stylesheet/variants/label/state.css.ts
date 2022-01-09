import { styleVariants } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const state = styleVariants({
  error: {
    color: vars.colors['danger-400']
  },

  success: {
    color: vars.colors['success-400']
  },

  default: {
    color: vars.colors['navy-500']
  }
})
