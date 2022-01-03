import { style } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/application/common/stylesheet/vars.css'

const wrapperStyle = style({
  display: 'flex',
  flexDirection: 'column',
  width: '42rem',
  minHeight: '25rem'
})

const headerRecipe = recipe({
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
      },
      info: {
        backgroundColor: vars.colors['info-50']
      }
    }
  }
})

const bodyStyle = style({
  textAlign: 'justify',
  hyphens: 'auto',
  padding: '2rem 3.5rem',
  height: '11rem',
  width: '100%'
})

const footerStyle = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  padding: '2rem 3.5rem',
  width: '100%'
})

export const alertClasses = {
  wrapperStyle,
  headerRecipe,
  bodyStyle,
  footerStyle
}

export type AlertVariants = NonNullable<RecipeVariants<typeof headerRecipe>>
