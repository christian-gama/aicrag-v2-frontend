import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/presentation/styles/vars.css'

const alertContainerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: '42rem',
  minHeight: '25rem'
})

const alertHeaderRecipe = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 3.5rem',
    height: '7rem',
    width: '100%',
    gap: '1.6rem',
    borderRadius: '5px 5px 0 0',
    backgroundColor: vars.colors['gray-50']
  },

  variants: {
    color: {
      danger: {
        backgroundColor: vars.colors['danger-50']
      }
    }
  }
})

const alertBodyStyle = style({
  textAlign: 'justify',
  hyphens: 'auto',
  padding: '2rem 3.5rem',
  height: '11rem',
  width: '100%'
})

const alertFooterStyle = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  padding: '2rem 3.5rem',
  width: '100%'
})

export const alertClasses = {
  alertContainerStyle,
  alertHeaderRecipe,
  alertBodyStyle,
  alertFooterStyle
}

export type AlertVariants = NonNullable<RecipeVariants<typeof alertHeaderRecipe>>
