import { calc } from '@vanilla-extract/css-utils'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars, fillColorVariants, breakpoints } from '@/components/_settings'
import { baseStyle } from '../../common'

export const h2Recipe = recipe({
  base: [
    baseStyle,
    {
      fontFamily: vars.font.h2.fontFamily,
      fontSize: vars.font.h2.fontSize,

      '@media': {
        [breakpoints.mobile]: {
          fontSize: calc.subtract(vars.font.h2.fontSize, '0.4rem')
        }
      }
    }
  ],

  variants: { color: fillColorVariants },

  defaultVariants: {
    color: 'text'
  }
})

export type H2RecipeVariants = NonNullable<RecipeVariants<typeof h2Recipe>>
