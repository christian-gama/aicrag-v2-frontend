import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { fillColorVariants } from '@/components/_settings/variants.css'
import { size } from '../../common/variants/size.css'

// Styles
export const closeIconHitbox = style({
  alignItems: 'center',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  maxWidth: 'min-content',
  padding: '0.8rem',

  ':hover': {
    cursor: 'pointer'
  }
})

// Recipes
export const closeIconRecipe = recipe({
  variants: {
    color: fillColorVariants,
    size
  },

  defaultVariants: {
    size: 'md'
  }
})

export type CloseIconVariants = NonNullable<RecipeVariants<typeof closeIconRecipe>>
