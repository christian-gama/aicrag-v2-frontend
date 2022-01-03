import { styleVariants } from '@vanilla-extract/css'
import { vars } from '@/application/common/stylesheet/vars.css'
import { hitboxStyle } from '..'

export const color = styleVariants({
  white: {
    fill: vars.colors.white,

    selectors: {
      [`${hitboxStyle}:hover &`]: {
        fill: vars.colors['gray-400']
      }
    }
  },

  main: {
    fill: vars.colors['cyan-600'],

    selectors: {
      [`${hitboxStyle}:hover &`]: {
        fill: vars.colors['cyan-600']
      }
    }
  }
})
