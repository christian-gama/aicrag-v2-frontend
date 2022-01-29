import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars, fillColorVariants } from '@/components/_settings'
import { baseStyle } from '../../common'

export const h2Recipe = recipe({
  base: [
    baseStyle,
    {
      fontFamily: vars.font.h2.fontFamily,
      fontSize: vars.font.h2.fontSize
    }
  ],

  variants: { color: fillColorVariants },

  defaultVariants: {
    color: 'text'
  }
})

export type H2RecipeVariants = NonNullable<RecipeVariants<typeof h2Recipe>>
