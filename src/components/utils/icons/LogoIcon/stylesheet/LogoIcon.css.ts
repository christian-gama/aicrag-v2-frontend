import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { fillColorVariants } from '@/components/_settings'

export const logoIconRecipe = recipe({
  variants: {
    color: fillColorVariants,

    size: {
      sm: {
        width: '19rem'
      },

      md: {
        width: '22rem'
      },

      lg: {
        width: '30rem'
      },

      xlg: {
        width: '40rem'
      }
    }
  },

  defaultVariants: {
    color: 'primary',
    size: 'sm'
  }
})

export type LogoIconVariants = NonNullable<
RecipeVariants<typeof logoIconRecipe>
>
