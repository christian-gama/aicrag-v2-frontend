import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { fillColor } from '@/application/common/stylesheet/variants/fillColor.css'
import { vars } from '@/application/common/stylesheet/vars.css'
import { baseStyle } from '../../commonStyle/base.css'

export const h2Recipe = recipe({
  base: [
    baseStyle,
    {
      fontFamily: vars.font.h2.fontFamily,
      fontSize: vars.font.h2.fontSize
    }
  ],

  variants: { color: fillColor }
})

export type H2RecipeVariants = NonNullable<RecipeVariants<typeof h2Recipe>>
