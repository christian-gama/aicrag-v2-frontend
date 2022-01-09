import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { fillColor } from '@/application/common/stylesheet/variants/fillColor.css'

export const iconRecipe = recipe({
  variants: {
    color: fillColor,

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

export type LogoIconVariants = NonNullable<RecipeVariants<typeof iconRecipe>>
