import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/presentation/styles/vars.css'

const cardStyle = style({
  backgroundColor: vars.colors.white,
  boxShadow: vars.shadow.light,
  borderRadius: '5px',
  maxWidth: 'max-content',
  minWidth: 'min-content',
  height: '100%'
})

const cardRecipe = recipe({
  base: [cardStyle],

  variants: {
    centered: {
      true: {
        marginRight: 'auto',
        marginLeft: 'auto'
      }
    }
  }
})

export type CardVariants = RecipeVariants<typeof cardRecipe>

export { cardRecipe }
