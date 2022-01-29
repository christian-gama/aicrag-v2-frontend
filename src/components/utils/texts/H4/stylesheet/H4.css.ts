import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars, fillColorVariants } from '@/components/_settings'
import { baseStyle } from '../../common'

export const h4Recipe = recipe({
  base: [
    baseStyle,
    {
      fontFamily: vars.font.h4.fontFamily,
      fontSize: vars.font.h4.fontSize
    }
  ],

  variants: { color: fillColorVariants },

  defaultVariants: {
    color: 'text'
  }
})

export type H4RecipeVariants = NonNullable<RecipeVariants<typeof h4Recipe>>
