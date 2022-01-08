import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/application/common/stylesheet/vars.css'

export const backgroundRecipe = recipe({
  base: {
    width: '100vw',
    minWidth: '100vw',
    height: '100vh',
    minHeight: '100vh',
    zIndex: '-1'
  },

  variants: {
    gradient: {
      true: {
        backgroundImage: `linear-gradient(to bottom right, ${vars.colors['cyan-900']} 0%, ${vars.colors['navy-900']} 100%)`
      },
      false: {
        backgroundColor: vars.colors['gray-100']
      }
    }
  }
})

export type BackgroundVariants = NonNullable<RecipeVariants<typeof backgroundRecipe>>
