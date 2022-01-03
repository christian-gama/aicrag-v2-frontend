import { styleVariants } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const dimmed = styleVariants({
  true: {
    color: vars.colors['gray-400']
  },

  false: {
    color: vars.colors.text.default,
    selectors: {
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: vars.colors['gray-50']
      }
    }
  }
})
