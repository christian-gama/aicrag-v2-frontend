import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { fillColorVariants } from '@/components/_settings/variants.css'
import { vars } from '@/components/_settings/vars.css'
import { baseStyle } from '../../../common/base.css'

export const h3Recipe = recipe({
  base: [
    baseStyle,
    {
      fontFamily: vars.font.h3.fontFamily,
      fontSize: vars.font.h3.fontSize
    }
  ],

  variants: { color: fillColorVariants },

  defaultVariants: {
    color: 'text'
  }
})

export type H3RecipeVariants = NonNullable<RecipeVariants<typeof h3Recipe>>
