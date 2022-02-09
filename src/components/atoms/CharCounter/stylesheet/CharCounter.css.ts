import { recipe } from '@vanilla-extract/recipes'
import { vars } from '@/components/_settings'

export const charCounter = recipe({
  base: {
    fontSize: vars.font.hint.fontSize,
    fontFamily: vars.font.hint.fontFamily,
    marginTop: '0.4rem'
  },

  variants: {
    isValid: {
      true: {
        color: vars.colors.text.default
      },

      false: {
        color: vars.colors['danger-500']
      }
    }
  }
})
