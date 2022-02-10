import { globalStyle, style } from '@vanilla-extract/css'
import { vars } from '@/components/_settings'

export const accountDataPreferences = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem'
})

export const accountDataPreferencesInputs = style({
  display: 'flex',
  gap: '10rem'
})

globalStyle(`${accountDataPreferences} span`, {
  fontWeight: 'bold',
  fontSize: vars.font.hint.fontSize,
  fontFamily: vars.font.hint.fontFamily,
  color: vars.colors['navy-500']
})
