import { calc } from '@vanilla-extract/css-utils'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars, fillColorVariants, breakpoints } from '@/components/_settings'
import { baseStyle } from '../../common'

export const h1Recipe = recipe({
  base: [
    baseStyle,
    {
      fontFamily: vars.font.h1.fontFamily,
      fontSize: vars.font.h1.fontSize,

      '@media': {
        [breakpoints.mobile]: {
          fontSize: calc.subtract(vars.font.h1.fontSize, '0.8rem')
        }
      }
    }
  ],

  variants: { color: fillColorVariants },

  defaultVariants: {
    color: 'text'
  }
})

export type H1RecipeVariants = NonNullable<RecipeVariants<typeof h1Recipe>>
