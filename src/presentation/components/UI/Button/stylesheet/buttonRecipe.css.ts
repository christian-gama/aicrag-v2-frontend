import { recipe, RecipeVariants } from '@vanilla-extract/recipes'
import { vars } from '@/application/common/stylesheet/vars.css'
import {
  containedCyanStyle,
  containedDangerStyle,
  containedInfoStyle,
  containedLightStyle,
  containedDisabledStyle,
  outlinedCyanStyle,
  outlinedDangerStyle,
  outlinedInfoStyle,
  outlinedLightStyle,
  outlinedDisabledStyle
} from './compoundVariants'
import { color, disabled, size, mode } from './variants'

export const buttonRecipe = recipe({
  base: {
    alignItems: 'center',
    borderRadius: '5px',
    display: 'flex',
    fontFamily: vars.font.button.fontFamily,
    fontSize: vars.font.button.fontSize,
    justifyContent: 'center',
    textTransform: vars.font.button.textTransform,
    transition: 'background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out'
  },

  variants: {
    color,
    disabled,
    mode,
    size
  },

  compoundVariants: [
    /* ------- CONTAINED ------- */
    {
      variants: {
        mode: 'contained',
        color: 'cyan',
        disabled: false
      },

      style: containedCyanStyle
    },

    {
      variants: {
        mode: 'contained',
        color: 'danger',
        disabled: false
      },

      style: containedDangerStyle
    },

    {
      variants: {
        mode: 'contained',
        color: 'info',
        disabled: false
      },
      style: containedInfoStyle
    },

    {
      variants: {
        mode: 'contained',
        color: 'light',
        disabled: false
      },
      style: containedLightStyle
    },

    {
      variants: {
        mode: 'contained',
        disabled: true
      },
      style: containedDisabledStyle
    },

    /* -------- OUTLINED -------- */
    {
      variants: {
        mode: 'outlined',
        color: 'cyan',
        disabled: false
      },

      style: outlinedCyanStyle
    },

    {
      variants: {
        mode: 'outlined',
        color: 'danger',
        disabled: false
      },

      style: outlinedDangerStyle
    },

    {
      variants: {
        mode: 'outlined',
        color: 'info',
        disabled: false
      },

      style: outlinedInfoStyle
    },

    {
      variants: {
        mode: 'outlined',
        color: 'light',
        disabled: false
      },

      style: outlinedLightStyle
    },

    {
      variants: {
        mode: 'outlined',
        disabled: true
      },

      style: outlinedDisabledStyle
    }
  ],

  defaultVariants: {
    mode: 'contained',
    color: 'cyan',
    size: 'md',
    disabled: false
  }
})

export type ButtonVariants = NonNullable<RecipeVariants<typeof buttonRecipe>>
