import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/application/common/stylesheet/vars.css'

export const popoverRecipe = recipe({
  base: {
    alignItems: 'center',
    borderRadius: '5px',
    bottom: '1.6rem',
    boxShadow: vars.shadow.light,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '52rem',
    minWidth: '40rem',
    overflow: 'hidden',
    position: 'fixed',
    right: '1.6rem'
  },

  variants: {
    type: {
      success: {
        backgroundColor: vars.colors['success-400']
      },

      error: {
        backgroundColor: vars.colors['danger-400']
      },

      info: {
        backgroundColor: vars.colors['info-400']
      }
    }
  }
})

export type PopoverVariants = NonNullable<RecipeVariants<typeof popoverRecipe>>
