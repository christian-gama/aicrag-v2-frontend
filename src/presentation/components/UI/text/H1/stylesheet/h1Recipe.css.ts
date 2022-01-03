import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { fillColor } from '@/application/common/stylesheet/variants/fillColor.css'
import { vars } from '@/application/common/stylesheet/vars.css'
import { baseStyle } from '../../commonStyle/base.css'

export const h1Recipe = recipe({
  base: [
    baseStyle,
    {
      fontFamily: vars.font.h1.fontFamily,
      fontSize: vars.font.h1.fontSize
    }
  ],

  variants: { color: fillColor }
})

export type H1RecipeVariants = NonNullable<RecipeVariants<typeof h1Recipe>>
