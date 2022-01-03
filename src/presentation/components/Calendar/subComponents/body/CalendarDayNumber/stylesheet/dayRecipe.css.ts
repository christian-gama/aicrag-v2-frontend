import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/application/common/stylesheet/vars.css'

export const dayRecipe = recipe({
  base: {
    alignItems: 'center',
    display: 'flex',
    fontFamily: vars.font.hint.fontFamily,
    fontSize: vars.font.hint.fontSize,
    justifyContent: 'center',
    color: vars.colors.text.default,
    borderRadius: '16px'
  },

  variants: {
    dimmed: {
      true: {
        color: vars.colors['gray-400']
      },
      false: {
        selectors: {
          '&:hover': {
            cursor: 'pointer',
            backgroundColor: vars.colors['gray-50']
          }
        }
      }
    },
    selected: {
      true: {
        border: `2px solid ${vars.colors['secondary-600']}`,
        ':hover': {
          cursor: 'default',
          backgroundColor: vars.colors.white,
          border: `2px solid ${vars.colors['secondary-400']}`
        }
      }
    }
  }
})

export type CalendarDayVariants = NonNullable<RecipeVariants<typeof dayRecipe>>
