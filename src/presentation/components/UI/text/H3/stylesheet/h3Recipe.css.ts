import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { color } from '@/application/common/stylesheet/colorVariants.css'
import { vars } from '@/application/common/stylesheet/vars.css'
import { baseStyle } from '../../commonStyle/base.css'

export const h3Recipe = recipe({
  base: [
    baseStyle,
    {
      fontFamily: vars.font.h3.fontFamily,
      fontSize: vars.font.h3.fontSize
    }
  ],

  variants: { color }
})

export type H3RecipeVariants = NonNullable<RecipeVariants<typeof h3Recipe>>
