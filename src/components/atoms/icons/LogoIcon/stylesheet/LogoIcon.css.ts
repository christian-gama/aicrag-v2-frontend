import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { fillColorVariants } from '@/components/_settings/variants.css'

export const logoIconRecipe = recipe({
  variants: {
    color: fillColorVariants,

    size: {
      sm: {
        width: '4.8rem',
        height: '4.8rem'
      },

      md: {
        width: '6.2rem',
        height: '6.2rem'
      },

      lg: {
        width: '9rem',
        height: '9rem'
      }
    }
  },

  defaultVariants: {
    size: 'sm',
    color: 'primary'
  }
})

export type LogoIconVariants = NonNullable<RecipeVariants<typeof logoIconRecipe>>