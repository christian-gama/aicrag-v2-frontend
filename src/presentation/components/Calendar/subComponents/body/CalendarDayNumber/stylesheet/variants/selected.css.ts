import { styleVariants } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const selected = styleVariants({
  true: {
    border: `2px solid ${vars.colors['cyan-600']}`,

    ':hover': {
      cursor: 'default',
      backgroundColor: vars.colors.white,
      border: `2px solid ${vars.colors['cyan-400']}`
    }
  }
})
