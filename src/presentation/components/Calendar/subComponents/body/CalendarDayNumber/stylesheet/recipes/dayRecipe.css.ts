import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/application/common/stylesheet/vars.css'
import { dimmed, selected } from '../variants'

export const dayRecipe = recipe({
  base: {
    alignItems: 'center',
    display: 'flex',
    fontFamily: vars.font.hint.fontFamily,
    fontSize: vars.font.hint.fontSize,
    justifyContent: 'center',
    borderRadius: '16px'
  },

  variants: {
    dimmed,
    selected
  }
})

export type CalendarDayVariants = NonNullable<RecipeVariants<typeof dayRecipe>>
