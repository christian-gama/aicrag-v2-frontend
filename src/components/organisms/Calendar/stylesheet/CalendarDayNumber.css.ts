import { styleVariants } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/components/_settings/vars.css'

const selected = styleVariants({
  true: {
    border: `2px solid ${vars.colors['cyan-600']}`,

    ':hover': {
      cursor: 'default',
      backgroundColor: vars.colors.white,
      border: `2px solid ${vars.colors['cyan-400']}`
    }
  }
})

const dimmed = styleVariants({
  true: {
    color: vars.colors['gray-400']
  },

  false: {
    color: vars.colors.text.default,
    selectors: {
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: vars.colors['gray-50']
      }
    }
  }
})

export const calendarDayNumberRecipe = recipe({
  base: {
    alignItems: 'center',
    borderRadius: '16px',
    display: 'flex',
    fontFamily: vars.font.hint.fontFamily,
    fontSize: vars.font.hint.fontSize,
    justifyContent: 'center'
  },

  variants: {
    dimmed,
    selected
  }
})

export type CalendarDayNumberVariants = NonNullable<RecipeVariants<typeof calendarDayNumberRecipe>>
