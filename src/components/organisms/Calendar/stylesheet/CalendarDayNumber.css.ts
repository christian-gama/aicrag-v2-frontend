import { styleVariants } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/components/_settings'

const selected = styleVariants({
  true: {
    border: `2px solid ${vars.colors['cyan-500']}`,

    ':hover': {
      cursor: 'default'
    }
  },

  false: {
    ':hover': {
      backgroundColor: vars.colors['gray-50'],
      cursor: 'pointer'
    }
  }
})

const dimmed = styleVariants({
  true: {
    color: vars.colors['gray-400']
  },

  false: {
    color: vars.colors.text.default
  }
})

export const calendarDayNumberRecipe = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '16px',
    fontFamily: vars.font.hint.fontFamily,
    fontSize: vars.font.hint.fontSize
  },

  variants: {
    selected,
    dimmed
  }
})

export type CalendarDayNumberVariants = NonNullable<
RecipeVariants<typeof calendarDayNumberRecipe>
>
