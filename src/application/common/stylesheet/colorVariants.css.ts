import { vars } from './vars.css'

export const color = {
  primaryDarker: {
    color: vars.colors['primary-900'],
    fill: vars.colors['primary-900']
  },
  primary: {
    color: vars.colors.white,
    fill: vars.colors.white
  },
  primaryLighter: {
    color: vars.colors['primary-400'],
    fill: vars.colors['primary-400']
  },

  secondaryDarker: {
    color: vars.colors['secondary-700'],
    fill: vars.colors['secondary-700']
  },
  secondary: {
    color: vars.colors['secondary-300'],
    fill: vars.colors['secondary-300']
  },
  secondaryLighter: {
    color: vars.colors['secondary-100'],
    fill: vars.colors['secondary-100']
  },

  successDarker: {
    color: vars.colors['success-500'],
    fill: vars.colors['success-500']
  },
  success: {
    color: vars.colors['success-400'],
    fill: vars.colors['success-400']
  },
  successLighter: {
    color: vars.colors['success-300'],
    fill: vars.colors['success-300']
  },

  dangerDarker: {
    color: vars.colors['danger-500'],
    fill: vars.colors['danger-500']
  },
  danger: {
    color: vars.colors['danger-400'],
    fill: vars.colors['danger-400']
  },
  dangerLighter: {
    color: vars.colors['danger-300'],
    fill: vars.colors['danger-300']
  },

  textDarker: {
    color: vars.colors.text.dark,
    fill: vars.colors.text.dark
  },
  textLighter: {
    color: vars.colors.text.light,
    fill: vars.colors.text.light
  }
}

export type ColorVariants = NonNullable<typeof color>
