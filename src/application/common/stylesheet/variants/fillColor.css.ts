import { styleVariants } from '@vanilla-extract/css'
import { vars } from '../vars.css'

export const fillColor = styleVariants({
  primaryDarker: {
    color: vars.colors['navy-700'],
    fill: vars.colors['navy-700']
  },
  primary: {
    color: vars.colors['navy-500'],
    fill: vars.colors['navy-500']
  },
  primaryLighter: {
    color: vars.colors['navy-300'],
    fill: vars.colors['navy-300']
  },

  secondaryDarker: {
    color: vars.colors['cyan-700'],
    fill: vars.colors['cyan-700']
  },
  secondary: {
    color: vars.colors['cyan-500'],
    fill: vars.colors['cyan-500']
  },
  secondaryLighter: {
    color: vars.colors['cyan-300'],
    fill: vars.colors['cyan-300']
  },

  successDarker: {
    color: vars.colors['success-700'],
    fill: vars.colors['success-700']
  },
  success: {
    color: vars.colors['success-500'],
    fill: vars.colors['success-500']
  },
  successLighter: {
    color: vars.colors['success-300'],
    fill: vars.colors['success-300']
  },

  dangerDarker: {
    color: vars.colors['danger-700'],
    fill: vars.colors['danger-700']
  },
  danger: {
    color: vars.colors['danger-500'],
    fill: vars.colors['danger-500']
  },
  dangerLighter: {
    color: vars.colors['danger-300'],
    fill: vars.colors['danger-300']
  },

  infoDarker: {
    color: vars.colors['info-700'],
    fill: vars.colors['info-700']
  },
  info: {
    color: vars.colors['info-500'],
    fill: vars.colors['info-500']
  },
  infoLighter: {
    color: vars.colors['info-300'],
    fill: vars.colors['info-300']
  },

  textDarker: {
    color: vars.colors.text.dark,
    fill: vars.colors.text.dark
  },
  text: {
    color: vars.colors.text.default,
    fill: vars.colors.text.default
  },
  textLighter: {
    color: vars.colors.text.light,
    fill: vars.colors.text.light
  },

  disabled: {
    color: vars.colors['gray-500'],
    fill: vars.colors['gray-500']
  },

  white: {
    color: vars.colors.white,
    fill: vars.colors.white
  },

  light: {
    color: vars.colors['gray-100'],
    fill: vars.colors['gray-100']
  },

  dark: {
    color: vars.colors['gray-700'],
    fill: vars.colors['gray-700']
  }
})

export type FillColorVariants = NonNullable<typeof fillColor>
