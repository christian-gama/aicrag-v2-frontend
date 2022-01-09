import { createGlobalTheme } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { breakpoints } from '@/application/common/breakpoints.css'
import { vars } from '@/application/common/stylesheet/vars.css'

export const dimensionVars = createGlobalTheme(':root', {
  height: ''
})

export const backgroundRecipe = recipe({
  base: {
    position: 'fixed',
    width: '100vw',
    height: dimensionVars.height,
    WebkitBackgroundSize: 'cover',
    backgroundSize: 'cover',
    zIndex: '-1',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    overflowY: 'auto',

    '@media': {
      [breakpoints.mobile]: {
        height: dimensionVars.height
      }
    }
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