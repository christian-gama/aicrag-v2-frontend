import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/application/common/stylesheet/vars.css'

const hitboxStyle = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  padding: '0.8rem',
  maxWidth: 'min-content',
  ':hover': {
    cursor: 'pointer'
  }
})

const iconRecipe = recipe({
  variants: {
    color: {
      light: {
        fill: vars.colors.white
      },
      dark: {
        fill: vars.colors['gray-900']
      }
    },
    size: {
      sm: {
        width: '1.6rem',
        height: '1.6rem'
      },
      md: {
        width: '2rem',
        height: '2rem'
      },
      lg: {
        width: '2.4rem',
        height: '2.4rem'
      }
    }
  },

  defaultVariants: {
    size: 'md'
  }
})

export const checkIconClasses = {
  iconRecipe,
  hitboxStyle
}

export type CheckIconVariants = NonNullable<RecipeVariants<typeof iconRecipe>>
