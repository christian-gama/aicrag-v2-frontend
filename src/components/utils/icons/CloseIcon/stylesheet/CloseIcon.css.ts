import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { fillColorVariants } from '@/components/_settings'
import { sizeVariants } from '../..'

export const closeIconHitbox = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  padding: '0.8rem',
  maxWidth: 'min-content',

  ':hover': {
    cursor: 'pointer'
  }
})

export const closeIconRecipe = recipe({
  variants: {
    color: fillColorVariants,
    size: sizeVariants
  },

  defaultVariants: {
    color: 'primary',
    size: 'md'
  }
})

export type CloseIconVariants = NonNullable<
RecipeVariants<typeof closeIconRecipe>
>
