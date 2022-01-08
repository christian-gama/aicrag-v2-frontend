import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { breakpoints } from '@/application/common/breakpoints.css'
import { padding } from './alert.css'
import { colors } from './variants'

export const alertHeaderRecipe = recipe({
  base: [
    padding,
    {
      alignItems: 'center',
      borderRadius: '5px 5px 0 0',
      display: 'flex',
      gap: '1.6rem',
      height: '7rem',
      width: '100%',

      '@media': {
        [breakpoints.mobile]: {
          borderRadius: '0'
        }
      }
    }
  ],

  variants: {
    color: colors
  },

  defaultVariants: {
    color: 'default'
  }
})

export type HeaderVariants = NonNullable<RecipeVariants<typeof alertHeaderRecipe>>
