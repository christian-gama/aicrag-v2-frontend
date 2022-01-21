import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { fillColorVariants } from '@/components/_settings/variants.css'

export const logoIconRecipe = recipe({
  variants: {
    color: fillColorVariants,

    size: {
      sm: {
        width: '20rem'
      },

      md: {
        width: '28rem'
      },

      lg: {
        width: '40rem'
      }
    }
  },

  defaultVariants: {
    size: 'sm',
    color: 'primary'
  }
})

export type LogoIconVariants = NonNullable<
RecipeVariants<typeof logoIconRecipe>
>
