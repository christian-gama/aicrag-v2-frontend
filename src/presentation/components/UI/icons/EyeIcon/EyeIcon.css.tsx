import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/application/common/stylesheet/vars.css'

const iconRecipe = recipe({
  base: {
    ':hover': {
      cursor: 'pointer'
    }
  },

  variants: {
    size: {
      sm: {
        width: '16px',
        height: '16px'
      },
      md: {
        width: '24px',
        height: '24px'
      }
    },
    color: {
      main: {
        fill: vars.colors['secondary-600']
      },
      disabled: {
        fill: vars.colors['gray-400']
      }
    }
  },

  defaultVariants: {
    size: 'md',
    color: 'main'
  }
})

export const eyeIconClasses = {
  iconRecipe
}

export type EyeIconVariants = NonNullable<RecipeVariants<typeof iconRecipe>>