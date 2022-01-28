import { createGlobalTheme } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { breakpoints } from '@/components/_settings/breakpoints.css'
import { vars } from '@/components/_settings/vars.css'

export const backgroundVars = createGlobalTheme(':root', {
  height: ''
})

export const backgroundRecipe = recipe({
  base: {
    position: 'fixed',
    zIndex: '-1',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100vw',
    height: backgroundVars.height,
    overflowY: 'auto',
    WebkitBackgroundSize: 'cover',

    '@media': {
      [breakpoints.mobile]: {
        height: backgroundVars.height
      }
    }
  },

  variants: {
    gradient: {
      true: {
        backgroundImage: vars.colors.gradient
      },
      false: {
        backgroundColor: vars.colors['gray-100']
      }
    }
  }
})

export type BackgroundVariants = NonNullable<
RecipeVariants<typeof backgroundRecipe>
>
