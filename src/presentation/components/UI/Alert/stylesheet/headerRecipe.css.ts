import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { color } from './variants'

export const headerRecipe = recipe({
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
    color
  },

  defaultVariants: {
    color: 'default'
  }
})

export type HeaderVariants = NonNullable<RecipeVariants<typeof headerRecipe>>
