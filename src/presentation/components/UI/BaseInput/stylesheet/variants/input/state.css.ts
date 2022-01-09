import { styleVariants } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const state = styleVariants({
  error: {
    boxShadow: `0 0 0 1px ${vars.colors['danger-400']}`,

    ':focus': {
      boxShadow: `inset 0 0 0 3px ${vars.colors['danger-400']}`
    }
  },

  success: {
    boxShadow: `0 0 0 1px ${vars.colors['success-400']}`,

    ':focus': {
      boxShadow: `inset 0 0 0 3px ${vars.colors['success-400']}`
    }
  },

  default: {
    boxShadow: `0 0 0 1px ${vars.colors['navy-500']}`,

    ':focus': {
      boxShadow: `inset 0 0 0 3px ${vars.colors['navy-500']}`
    }
  }
})
