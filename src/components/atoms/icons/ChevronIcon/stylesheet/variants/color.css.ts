import { styleVariants } from '@vanilla-extract/css'
import { vars } from '@/components/_settings/vars.css'
import { iconHitbox } from '..'

export const color = styleVariants({
  white: {
    fill: vars.colors.white,

    selectors: {
      [`${iconHitbox}:hover &`]: {
        fill: vars.colors['gray-400']
      }
    }
  },

  main: {
    fill: vars.colors['cyan-600'],

    selectors: {
      [`${iconHitbox}:hover &`]: {
        fill: vars.colors['cyan-600']
      }
    }
  }
})
