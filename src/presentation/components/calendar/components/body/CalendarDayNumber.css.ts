import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/presentation/styles/vars.css'

const calendarDayRecipe = recipe({
  base: {
    alignItems: 'center',
    display: 'flex',
    fontFamily: vars.font.hint.fontFamily,
    fontSize: vars.font.hint.fontSize,
    justifyContent: 'center',
    color: vars.colors.text.default,
    borderRadius: '20px'
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
        backgroundColor: vars.colors['secondary-300'],
        color: vars.colors.white,
        ':hover': {
          cursor: 'default',
          backgroundColor: vars.colors['secondary-300']
        }
      }
    }
  }
})

export const calendarDayClasses = {
  calendarDayRecipe
}

export type CalendarDayVariants = RecipeVariants<typeof calendarDayRecipe>
