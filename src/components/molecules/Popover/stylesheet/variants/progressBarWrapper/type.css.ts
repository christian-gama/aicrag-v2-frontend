import { styleVariants } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'

export const type = styleVariants({
  success: {
    backgroundColor: vars.colors['success-200']
  },

  error: {
    backgroundColor: vars.colors['danger-200']
  },

  info: {
    backgroundColor: vars.colors['info-200']
  }
})
