import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/application/common/stylesheet/vars.css'

const baseCardStyle = style({
  boxShadow: vars.shadow.light,
  borderRadius: '5px',
  maxWidth: 'max-content',
  minWidth: 'min-content',
  height: 'max-content'
})

const cardRecipe = recipe({
  base: [baseCardStyle],

  variants: {
    centered: {
      true: {
        marginRight: 'auto',
        marginLeft: 'auto'
      }
    },
    roundness: {
      sm: {
        borderRadius: '3px'
      },
      md: {
        borderRadius: '5px'
      },
      lg: {
        borderRadius: '10px'
      },
      xl: {
        borderRadius: '20px'
      }
    },
    transparent: {
      true: {
        backgroundColor: vars.colors.transparent
      },
      false: {
        backgroundColor: vars.colors.white
      }
    }
  },

  defaultVariants: {
    roundness: 'md',
    transparent: false
  }
})

export type CardVariants = NonNullable<RecipeVariants<typeof cardRecipe>>

export { cardRecipe }
