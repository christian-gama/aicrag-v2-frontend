import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { breakpoints } from '@/components/_settings'

export const center = recipe({
  base: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  variants: {
    stickMobile: {
      true: {
        '@media': {
          [breakpoints.mobile]: {
            top: '0%',
            transform: 'translate(-50%, 0%)'
          }
        }
      },
      false: {}
    }
  },

  defaultVariants: {
    stickMobile: true
  }
})

export type CenterVariants = NonNullable<RecipeVariants<typeof center>>
