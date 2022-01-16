import { style, styleVariants } from '@vanilla-extract/css'
import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { breakpoints } from '@/components/_settings/breakpoints.css'
import { vars } from '@/components/_settings/vars.css'

export const colorVariants = styleVariants({
  danger: {
    backgroundColor: vars.colors['danger-50']
  },

  info: {
    backgroundColor: vars.colors['info-50']
  },

  warning: {
    backgroundColor: vars.colors['warning-50']
  }
})

export const padding = style({
  padding: '2rem 2.8rem',

  '@media': {
    [breakpoints.mobile]: {
      padding: '1.5rem 2rem'
    }
  }
})

export const alert = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '42rem',

  '@media': {
    [breakpoints.mobile]: {
      width: '100vw'
    }
  }
})

export const alertBody = style([
  padding,
  {
    textAlign: 'justify',
    hyphens: 'auto',
    minHeight: '12rem',
    width: '100%'
  }
])

export const alertFooter = style([
  padding,
  {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '0.8rem',
    alignItems: 'flex-end',
    width: '100%'
  }
])

export const alertHeaderRecipe = recipe({
  base: [
    padding,
    {
      alignItems: 'center',
      borderRadius: '5px 5px 0 0',
      display: 'flex',
      gap: '1.6rem',
      height: '7rem',
      width: '100%',

      '@media': {
        [breakpoints.mobile]: {
          borderRadius: '0'
        }
      }
    }
  ],

  variants: {
    color: colorVariants
  },

  defaultVariants: {
    color: 'warning'
  }
})

export type AlertHeaderVariants = NonNullable<RecipeVariants<typeof alertHeaderRecipe>>
