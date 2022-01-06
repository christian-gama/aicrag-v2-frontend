import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { colors } from './variants'

export const alertHeaderRecipe = recipe({
  base: {
    alignItems: 'center',
    borderRadius: '5px 5px 0 0',
    display: 'flex',
    gap: '1.6rem',
    height: '7rem',
    padding: '0 3.5rem',
    width: '100%'
  },

  variants: {
    color: colors
  },

  defaultVariants: {
    color: 'default'
  }
})

export type HeaderVariants = NonNullable<RecipeVariants<typeof alertHeaderRecipe>>
