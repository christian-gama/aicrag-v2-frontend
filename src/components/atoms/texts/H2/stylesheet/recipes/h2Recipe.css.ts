import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { fillColorVariants } from '@/components/_settings/fillColorVariants.css'
import { vars } from '@/components/_settings/vars.css'
import { baseStyle } from '../../../common/base.css'

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
