import { styleVariants, createGlobalTheme } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/components/_settings/vars.css'

// Variants
const centeredVariants = styleVariants({
  true: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
})

const roundnessVariants = styleVariants({
  none: {
    borderRadius: '0'
  },

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
})

const transparentVariants = styleVariants({
  true: {
    backgroundColor: vars.colors.transparent
  },

  false: {
    backgroundColor: vars.colors.white
  }
})

export const cardVars = createGlobalTheme(':root', {
  height: 'max-content',
  margin: '0',
  padding: '0',
  width: 'max-content'
})

// Recipes
export const cardRecipe = recipe({
  base: {
    boxShadow: vars.shadow.sm,
    height: cardVars.height,
    margin: cardVars.margin,
    maxWidth: cardVars.width,
    minWidth: cardVars.width,
    padding: cardVars.padding,
    width: cardVars.width
  },

  variants: {
    centered: centeredVariants,
    roundness: roundnessVariants,
    transparent: transparentVariants
  },

  defaultVariants: {
    roundness: 'md',
    transparent: false
  }
})

export type CardVariants = NonNullable<RecipeVariants<typeof cardRecipe>>
