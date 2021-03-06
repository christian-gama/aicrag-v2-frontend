import { calc } from '@vanilla-extract/css-utils'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars, fillColorVariants, breakpoints } from '@/components/_settings'
import { baseStyle } from '../../common'

export const h3Recipe = recipe({
  base: [
    baseStyle,
    {
      fontFamily: vars.font.h3.fontFamily,
      fontSize: vars.font.h3.fontSize,

      '@media': {
        [breakpoints.mobile]: {
          fontSize: calc.subtract(vars.font.h3.fontSize, '0.4rem')
        }
      }
    }
  ],

  variants: { color: fillColorVariants },

  defaultVariants: {
    color: 'text'
  }
})

export type H3RecipeVariants = NonNullable<RecipeVariants<typeof h3Recipe>>
