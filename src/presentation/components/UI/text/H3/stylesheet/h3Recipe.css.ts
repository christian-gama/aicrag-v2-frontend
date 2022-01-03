import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { fillColor } from '@/application/common/stylesheet/variants/fillColor.css'
import { vars } from '@/application/common/stylesheet/vars.css'
import { baseStyle } from '../../common/base.css'

export const h3Recipe = recipe({
  base: [
    baseStyle,
    {
      fontFamily: vars.font.h3.fontFamily,
      fontSize: vars.font.h3.fontSize
    }
  ],

  variants: { color: fillColor },

  defaultVariants: {
    color: 'text'
  }
})

export type H3RecipeVariants = NonNullable<RecipeVariants<typeof h3Recipe>>
