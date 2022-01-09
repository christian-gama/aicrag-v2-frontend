import { style } from '@vanilla-extract/css'
import { padding } from './alert.css'

export const alertBody = style([
  padding,
  {
    textAlign: 'justify',
    hyphens: 'auto',
    minHeight: '12rem',
    width: '100%'
  }
])
