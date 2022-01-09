import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { fillColorVariants } from '@/components/_settings/fillColorVariants.css'
import { vars } from '@/components/_settings/vars.css'
import { baseStyle } from '../../../common/base.css'

export const h1Recipe = recipe({
  base: [
    baseStyle,
    {
      fontFamily: vars.font.h1.fontFamily,
      fontSize: vars.font.h1.fontSize
    }
  ],

  variants: { color: fillColorVariants },

  defaultVariants: {
    color: 'text'
  }
})

export type H1RecipeVariants = NonNullable<RecipeVariants<typeof h1Recipe>>
